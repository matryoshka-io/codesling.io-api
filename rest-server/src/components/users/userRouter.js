import express from 'express';

import {
  fetchAllUserController,
  updateCloutController,
  fetchUserByEmailController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUserController);

router.route('/updateClout/:userId')
  .post(updateCloutController);

router.route('/user/:email') // must be RESTful, i.e. infinite nouns by finite verbs (maybe 6)
  .get(fetchUserByEmailController);

export default router;
