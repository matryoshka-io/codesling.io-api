require('dotenv').config();

import { Pool } from 'pg';
import Promise from 'bluebird';

import {
  success,
  error,
} from '../../lib/log';

/**
 * config for pg pool
 * limiting number of connections to 20
 * must end connection after each query => database.end()
 */

// const config = {
//   user: process.env.NODE_ENV === 'production' ? process.env.AWS_USER : process.env.LOCAL_USER,
//   host: process.env.NODE_ENV === 'production' ? process.env.AWS_HOST : process.env.LOCAL_HOST,
//   database: process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE,
//   password: process.env.NODE_ENV === 'production' ? process.env.AWS_PASSWORD : process.env.LOCAL_PASSWORD,
//   port: process.env.NODE_ENV === 'production' ? process.env.AWS_PORT : process.env.LOCAL_PORT,
//   max: 20
// };

const config = {
  user: process.env.LOCAL_USER,
  host: process.env.LOCAL_HOST,
  database: process.env.LOCAL_DATABASE,
  password: process.env.LOCAL_PASSWORD,
  port: process.env.LOCAL_PORT,
  max: 20
};

const db = new Pool(config);

db.on('connect', () => {
  success('successfully connected to pg', config.database);
});

// db.on('acquire', client => {
//   success('successfully acquired ', Object.keys(client));
// })

db.on('remove', client => {
  success('successfully removed client= ', client)
});

db.on('error', (err) => {
  error('error in pg ', err);
});

db.connect();

Promise.promisifyAll(db);

export default db;
