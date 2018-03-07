import db from '../../config/database';
import {
  addChallengeHelper,
  addChallengeHelper2
} from './challengeSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addChallengeQuery = async (body) => {
  try {
    const queryString = addChallengeHelper(body);
    const data = await db.queryAsync(queryString);
    success('addChallengeQuery - successfully added challenge ', data);
    return data;
  } catch (err) {
    error('addChallengeQuery - error= ', err);
  }
};

export const addChallengeQuery2 = async (testCase, challengeId) => {
  try {
    const queryString = addChallengeHelper2(testCase, challengeId);
    console.log(queryString);
    const data = await db.queryAsync(queryString);
    success('addChallengeQuery2 - successfully added challenge test case', data);
  } catch (err) {
    error('addChallengeQuery2 - error= ', err);
  }
}