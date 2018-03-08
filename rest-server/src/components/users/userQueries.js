import db from '../../config/database';
import {
  fetchAllUserHelper,
  fetchUserHelper,
  updateCloutHelper,
  fetchUserByEmailHelper,
  getUserCloutHelper
} from './userSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserQuery = async () => {
  try {
    const queryString = fetchAllUserHelper();
    const data = await db.queryAsync(queryString);
    success('fetchAllUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchAllUserQuery - error= ', err);
  }
};

export const fetchUserQuery = async (payload) => {
  try {
    const queryString = fetchUserHelper(payload);
    const data = db.queryAsync(queryString);
    success('fetchUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchUserQuery - error= ', err);
  }
};

export const updateCloutQuery = async (user_id) => {
  try {
    const queryString = updateCloutHelper(user_id);
    const data = db.queryAsync(queryString);
    success('updateCloutQuery - successfully updated clout ', data);
    return data;
  } catch (err) {
    error('updateCloutQuery - error= ', err);    
  }
};

export const fetchUserByEmailQuery = async (email) => {
  try {
    const queryString = fetchUserByEmailHelper(email);
    const data = db.queryAsync(queryString);
    success('fetchUserByEmailQuery - successfully retrieved user ', data);
    return data;
  } catch (err) {
    error('fetchUserByEmailQuery - error= ', err);    
  }
};

export const getUserCloutQuery = async (user_id) => {
  try {
    const queryString = getUserCloutHelper(user_id);
    const data = db.queryAsync(queryString);
    success('getUserCloutQuery - successfully retrieved clout ', data);
    return data;
  } catch (err) {
    error('getUserCloutQuery - error= ', err);    
  }
};