(async () => {
    const fs = require('fs');
const prompt = require('prompt');

prompt.start();

const {dirName} = await prompt.get(['dirName']);
fs.mkdirSync(dirName);

const {fileName} = await prompt.get(['fileName']);
let {data} = await prompt.get(['data']);
let path = `${dirName}/${fileName}.txt`;
fs.writeFileSync(path, data);

fs.appendFileSync(path, ' World!');

data = fs.readFileSync(path, 'utf-8');
console.log(data);

const {newName} = await prompt.get(['newName']);
fs.renameSync(path, `${dirName}/${newName}.txt`);
path = `${dirName}/${newName}.txt`;

fs.unlinkSync(path);
fs.rmdirSync(dirName);
})();