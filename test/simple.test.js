const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


function compareFileContent(filePath1, filePath2) {
  function readFileContent(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
  }
  const content1 = readFileContent(path.join(__dirname, filePath1));
  const content2 = readFileContent(path.join(__dirname, filePath2));
  return [content1, content2]
}
test('create combined file', (done) => {
  exec('node index -o test/asset/output.json.test -i test/asset/test1.json test/asset/test2.json', (error, stdout, stderr) => {
    if (error) {
      done(error);
      return;
    }
    done();
  });
  const [content1, content2] = compareFileContent("./asset/output.json", "./asset/output.json.test");

  expect(content1).toEqual(content2);
});

test('create combined file with format', (done) => {
  exec('node index -f -o test/asset/output_formated.json.test -i test/asset/test1.json test/asset/test2.json', (error, stdout, stderr) => {
    if (error) {
      done(error);
      return;
    }
    done();
  });
  const [content1, content2] = compareFileContent("./asset/output_formated.json", "./asset/output_formated.json.test");

  expect(content1).toEqual(content2);
});

test('create combined file 3', (done) => {
  exec('node index -o test/asset/output_3.json.test -i test/asset/test1.json test/asset/test2.json test/asset/test3.json', (error, stdout, stderr) => {
    if (error) {
      done(error);
      return;
    }
    done();
  });
  const [content1, content2] = compareFileContent("./asset/output_3.json", "./asset/output_3.json.test");

  expect(content1).toEqual(content2);
});