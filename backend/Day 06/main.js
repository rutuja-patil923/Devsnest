(async () => {
  const fs = require("fs");
  const prompt = require("prompt");

  prompt.start();

  const { dirName } = await prompt.get(["dirName"]);
  fs.mkdir(dirName, (err) => {
    if (err) console.log(err);
  });

  const { fileName } = await prompt.get(["fileName"]);
  let { data } = await prompt.get(["data"]);
  let path = `${dirName}/${fileName}.txt`;
  fs.writeFile(path, data, () => {
    console.log(`File successfully written!`);
  });

  fs.appendFile(path, " World!", () => {
    console.log(`Data successfully appended!`);
  });

  fs.readFile(path, "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });

  const { newName } = await prompt.get(["newName"]);
  fs.rename(path, `${dirName}/${newName}.txt`, () => {
    console.log(`File successfully renamed!`);
  });
  path = `${dirName}/${newName}.txt`;

  fs.unlink(path, () => {
    console.log(`File successfully deleted!`);
  });
  fs.rmdir(dirName, () => {
    console.log(`Directory successfully removed!`);
  });
})();
