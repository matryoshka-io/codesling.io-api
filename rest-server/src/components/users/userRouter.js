import express from 'express';

import {
  fetchAllUserController,
  updateCloutController,
  fetchUserByEmailController,
  getUserCloutController
} from './userControllers';

const router = express.Router();

router.route('/fetchAllUsers')
  .get(fetchAllUserController);

router.route('/updateClout/:userId')
  .post(updateCloutController);

router.route('/user/:email') // must be RESTful, i.e. infinite nouns by finite verbs (maybe 6)
  .get(fetchUserByEmailController);

router.route('/user/:userId/clout')
  .get(getUserCloutController);

export default router;
