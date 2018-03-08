import express from 'express';

import {
  addTestCaseController,
  getTestCaseController
} from './testCasesControllers';

const router = express.Router();

router.route('/')
  .post(addTestCaseController);

router.route('/:challengeId')
  .get(getTestCaseController)

export default router;
