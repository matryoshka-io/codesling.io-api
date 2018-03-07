import db from '../../config/database';
import {
  signUpHelper,
  loginHelper
} from './authSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const signUpQuery = async (body) => {
  try {
    const queryString = signUpHelper(body);
    const data = await db.queryAsync(queryString);
    // db.release();
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));

    return data;
  } catch (err) {
    error('signUpQuery - error= ', err);
    throw new Error(err);
  }
};

export const loginQuery = async (body) => {
  try {
    const queryString = loginHelper(body);
    const data = await db.queryAsync(queryString);
    // db.end();
    console.log('data', data.rows[0].username)
    success('loginQuery - successfully retrieved data from user ', data.rows[0]);
    return data;
  } catch (err) {
    error('loginQuery - error= ', err);
    throw new Error(err);
  }
}
