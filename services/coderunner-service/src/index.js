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

app.post('/submit-code', (req, res) => {
  tmp.file({ postfix: '.js' }, (errCreatingTmpFile, path) => {
    axios.get(`http://localhost:3396/api/testCases/${req.body.challengeId}`)
      .then((data) => {
        writeFile(path, `${req.body.code}\n${data.data.content}`, (errWritingFile) => {
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
                const output = stdout.split('\n');
                const result = output[output.length - 2];
                if (result === 'success') {
                  // We need the client's id.
                } else {
                  // Hi.
                }
                // console.log(output[output.length - 2]);
                res.write(JSON.stringify(stdout));
                res.send();
              }
            });
          }
        });
      });
  });
});

app.listen(PORT, success(`coderunner-service is listening on port ${PORT}`));
