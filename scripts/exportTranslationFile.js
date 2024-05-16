const fs = require('fs');
const xlsx = require('node-xlsx');
let localeFileName = 'common.json';
let localeRootPath = './src/locales';
let languages = [];
let langFile = [];

languages = fs
  .readdirSync(localeRootPath)
  .filter(f => f.split('.').length === 1);

languages.forEach(lang => {
  langFile.push({
    lang,
    data: JSON.parse(
      fs.readFileSync(`${localeRootPath}/${lang}/${localeFileName}`, 'utf-8')
    )
  });
});

// create a tree first so if there are missing key, it can also added to csv
let tree = {};

langFile.forEach((lang, index) => {
  if (index === 0) {
    tree = lang.data;
  } else {
    const addKeyToTree = (obj, treeObj) => {
      Object.keys(obj).forEach(key => {
        // only type should be string and object
        if (typeof obj[key] === 'object') {
          if (typeof treeObj[key] === 'undefined') {
            treeObj[key] = {};
          }
          addKeyToTree(obj[key], treeObj[key]);
        } else {
          if (typeof treeObj[key] === 'undefined') {
            treeObj[key] = '';
          } else if (typeof treeObj[key] !== 'string') {
            throw `${key} should be a string but is object`;
          }
        }
      });
    };
    addKeyToTree(lang.data, tree);
  }
});

let data = [['key', ...langFile.map(lang => lang.lang)]];
const addRowForTreeData = baseKey => {
  const layer = eval(`tree${baseKey}`);
  Object.keys(layer).forEach(key => {
    if (typeof layer[key] === 'object') {
      addRowForTreeData(`${baseKey}?.['${key}']`);
    } else {
      data.push([
        `${baseKey}?.['${key}']`.slice(2),
        ...langFile.map(({ data }) => {
          console.log(`data${baseKey}?.[${key}]`);
          console.log(eval(`data${baseKey}?.['${key}']`));
          return eval(`data${baseKey}?.['${key}']`) || '';
        })
      ]);
    }
  });
};
addRowForTreeData('');

var buffer = xlsx.build([{ name: 'locales', data: data }]); // Returns a buffer
fs.writeFileSync('locales.xlsx', buffer);
