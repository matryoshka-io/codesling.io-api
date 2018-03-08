import db from '../../config/database';
import {
  fetchAllUserQuery,
  updateCloutQuery,
  fetchUserByEmailQuery,
  getUserCloutQuery
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
    console.log(req.params);
    const data = await fetchUserByEmailQuery(req.params.email);
    success('fetchUserByEmailController – successfully retrieved user ', data);
    res.status(200).send(data.rows[0]);
  } catch (err) {
    error('fetchUserByEmailController - error= ', error);    
  }
};

export const getUserCloutController = async (req, res) => {
  try {
    const data = await getUserCloutQuery(req.params.userId);
    success('getUserCloutController – successfully retrieved clout ', data);
    return res.status(200).send(data.rows[0]);
  } catch (err) {
    error('getUserCloutController - error= ', error);    
  }
};