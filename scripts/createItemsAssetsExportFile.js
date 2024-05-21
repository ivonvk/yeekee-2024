const testFolder = './src/assets/items';
const fs = require('fs');

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

const files = getFiles(testFolder)
  .map(element => {
    return element.replace(testFolder, '').replace('/', '');
  })
  .filter(element => {
    return !(element.endsWith('.js') || element.endsWith('.DS_Store'));
  });
let importStr = '';
let varStr = '';
// try {
  let count = 0
files.forEach(f => {
  let splitted = f.split('.');
  let varName = splitted[0].split('/').join('_').toUpperCase();
  varName = varName.replace('(','')
  varName = varName.replace(')','')
  varName = varName.replace(' ','_')
  importStr += `import ${varName} from './${f}';\n`;
  if(count+1>=files.length){
    varStr += `  ${varName}.src\n`;

  }else{
  varStr += `  ${varName}.src,\n`;

  }
});

let exportFile = `${importStr}

const items_array = [
${varStr}
]

export default items_array;
`;

console.log(exportFile);
