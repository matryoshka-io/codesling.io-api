import {
  addChallengeQuery,
  addChallengeQuery2
} from './challengeQueries';
import {
  addUserChallengeQuery
} from '../usersChallenges/usersChallengesQueries';
import {
  success,
  error
} from '../../lib/log';

export const addChallengeController = async (req, res) => {
  try {
    /**
     * 
     */
    const { rows } = await addChallengeQuery(req.body);
    success('addChallengeController - successfully added challenge ', rows[0]);
    req.body.challenge_id = rows[0].id;
    await addUserChallengeQuery(req.body);
    await addChallengeQuery2(req.body.testCase, rows[0].id);
    success('addUserChallengeQuery - successfully added user challenge ');
    return res.status(200).send(rows[0]);
  } catch (err) {
    error('addChallengeController - error= ', error);
  }
};

