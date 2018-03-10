/* eslint-disable no-console */
// http://codewinds.com/blog/2013-08-19-nodejs-writable-streams.html

const fileSystem = require('fs');
const path = require('path');
const config = require('../config/.env');

const environment = process.argv[2];

if (!config[environment]) {
  console.warn('Cannot find config for the requested environment');
  process.exit(1);
} else {
  console.log(`Processing configuration for ${environment}`);
}

const folders = Object.keys(config[environment]);
for (const folder of folders) { // eslint-disable-line
  const writeStream = fileSystem.createWriteStream(path.join('./', folder, '.env'));
  for (const cfgVariable of config[environment][folder]) { // eslint-disable-line
    writeStream.write(cfgVariable + '\n'); // eslint-disable-line
  }
  writeStream.end();
}
