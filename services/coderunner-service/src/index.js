import { writeFile } from 'fs';
import { execFile } from 'child_process';
import express from 'express';
import bodyParser from 'body-parser';
import tmp from 'tmp';
import cors from 'cors';
// import vm from 'vm';

import { success } from './lib/log';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let verify = function () {
  if (hello() === 1) {
    console.log('Success!');
  } else {
    console.log('Not sook sess');
  }
}

app.post('/submit-code', (req, res) => {
  tmp.file({ postfix: '.js' }, (errCreatingTmpFile, path) => {
    console.log('// yo \n' + req.body.code + `\n` + verify.toString() + `\n verify();`);
    writeFile(path, '// yo \n' + req.body.code + `\n` + verify.toString() + `\n verify();`, (errWritingFile) => {
      if (errWritingFile) {
        res.send(errWritingFile);
      } else {
        execFile('node', [path], (errExecutingFile, stdout, stderr) => {
          if (errExecutingFile) {
            let stderrFormatted = stderr.split('\n');
            stderrFormatted.shift();
            stderrFormatted = stderrFormatted.join('\n');
            res.send(stderrFormatted);
          } else {
            res.write(JSON.stringify(stdout));
            res.send();
          }
        });
      }
    });
  });
});

app.listen(PORT, success(`coderunner-service is listening on port ${PORT}`));
