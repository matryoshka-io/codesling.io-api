import { writeFile } from 'fs';
import { execFile } from 'child_process';
import express from 'express';
import bodyParser from 'body-parser';
import tmp from 'tmp';
import cors from 'cors';
// import vm from 'vm';

import axios from 'axios';

import { success } from './lib/log';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

/* let verify = function () {
  if (hello() === 1) {
    console.log('Success!');
  } else {
    console.log('Not sook sess');
  }
} */

// '// yo \n' + req.body.code + `\n` + verify.toString() + `\n\nverify();`

app.post('/submit-code', (req, res) => {
  tmp.file({ postfix: '.js' }, (errCreatingTmpFile, path) => {
    // console.log('// yo \n' + req.body.code + `\n` + verify.toString() + `\n\nverify();`);
    // const testCase = await 
    axios.get(`http://localhost:3396/api/testCases/${req.body.challengeId}`)
      .then((data) => {
        // console.log(data);
        // console.log(data.data.content);
        writeFile(path, req.body.code + '\n' + data.data.content, (errWritingFile) => {
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
                // console.log(stdout.split('\n')[stdout.split('\n').length - 2]); // lol
                res.send();
              }
            });
          }
        });
      });
  });
});

app.listen(PORT, success(`coderunner-service is listening on port ${PORT}`));
