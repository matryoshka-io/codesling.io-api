import db from '../../config/database';
import {
  fetchAllUserQuery,
  updateCloutQuery,
  fetchUserByEmailQuery
} from './userQueries';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserController = async (req, res) => {
  try {
    const data = await fetchAllUserQuery();
    success('fetchAllUserController - successfully fetched data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllUserController - error= ', error);
  }
};

export const updateCloutController = async (req, res) => {
  try {
    const data = await updateCloutQuery(req.params.userId);
    success('updateCloutController – successfully updated clout ', data);
    return res.status(201).send(data); // lawl
  } catch (err) {
    error('updateCloutController - error= ', error);
  }
};

export const fetchUserByEmailController = async (req, res) => {
  try {
    const data = await fetchUserByEmailQuery(req.params.email);
    success('fetchUserByEmailController – successfully retrieved user ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchUserByEmailController - error= ', error);    
  }
};
