// http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html

const fileSystem = require('fs');
const path = require('path');
const env = require('../config/.env');

const folders = Object.keys(env);
for (const folder of folders) {
  const writeStream = fileSystem.createWriteStream(path.join('./', folder, '.env'));
  for (const envVariable of env[folder]) {
    writeStream.write(envVariable + '\n');
  }
  writeStream.end();
}
