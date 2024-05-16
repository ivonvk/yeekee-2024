const testFolder = './src/assets/img';
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
files.forEach(f => {
  let splitted = f.split('.');
  let varName = splitted[0].split('/').join('_').toUpperCase();
  importStr += `import ${varName} from './${f}'\n`;
  varStr += `  ${varName}:${varName}.src,\n`;
});

let exportFile = `${importStr}

const assets = {
${varStr}
}

export default assets;
`;

console.log(exportFile);
