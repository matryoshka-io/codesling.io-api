import db from '../../config/database';
import {
  addTestCaseHelper
} from './testCasesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseQuery = async (body) => {
  try {
    const queryString = addTestCaseHelper(body);
    const data = db.queryAsync(queryString);
    success('addTestCaseQuery - successfully added test case ', data);
    return data;
  } catch (err) {
    error('addTestCaseQuery - error= ', err);
  }
};

export const getTestCaseQuery = async (challengeId) => {
  try {
    const queryString = getTestCaseHelper(challengeId);
    const data = db.queryAsync(queryString);
    success('getTestCaseQuery - successfully got test case ', data);
    return data;
  } catch (err) {
    error('getTestCaseQuery - error= ', err);
  }
};
