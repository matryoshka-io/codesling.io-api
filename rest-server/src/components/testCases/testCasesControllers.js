import {
  addTestCaseQuery,
  getTestCaseQuery
} from './testCasesQuery';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseController = async (req, res) => {
  try {
    const data = await addTestCaseQuery(req.body);
    success('addTestCaseController - successfully added test case ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addTestCaseController - error= ', err);
  }
};

export const getTestCaseController = async (req, res) => {
  try {
    const data = await getTestCaseQuery(req.params.challengeId);
    success('getTestCaseController - successfully got test case ', data);
    res.status(200).send(data.rows[0]);
  } catch (err) {
    error('getTestCaseController - error= ', err);
  }
};