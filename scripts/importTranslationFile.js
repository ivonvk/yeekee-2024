const fs = require('fs');
const { exec } = require('child_process');
const xlsx = require('node-xlsx');
let localeFileName = 'common.json';
let localeRootPath = './src/locales';
let excelFile = './locales.xlsx';
let langFile = [];

const setObjectValue = (obj, key, value) => {
  const layers = key.split('?.');
  layers.forEach((property, deep) => {
    if (deep === layers.length - 1) {
      eval(`obj${layers.slice(0, deep + 1).join('')} = value`);
    } else if (!eval(`obj${layers.slice(0, deep + 1).join('?.')}`)) {
      eval(`obj${layers.slice(0, deep + 1).join('')} = {}`);
    }
  });
};

const workSheetsFromFile = xlsx.parse(excelFile);
const localeData = workSheetsFromFile[0].data;
localeData.forEach((row, rowIndex) => {
  if (rowIndex === 0) {
    row.forEach((column, columnIndex) => {
      if (columnIndex > 0) {
        langFile[columnIndex - 1] = { lang: column, data: {} };
      }
    });
  } else {
    row.forEach((column, columnIndex) => {
      if (columnIndex > 0) {
        setObjectValue(langFile[columnIndex - 1].data, row[0], column);
      }
    });
  }
});

langFile.forEach(lang => {
  fs.writeFileSync(
    `${localeRootPath}/${lang.lang}/${localeFileName}`,
    JSON.stringify(lang.data)
  );
  exec(`prettier --write ${localeRootPath}/${lang.lang}/${localeFileName}`);
});
