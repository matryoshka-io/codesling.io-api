require('dotenv').config();

import db from '../../config/database';
import {
  success,
  error
} from '../log';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

/**
 * SQL statements for syncing and dropping tables
 * 
 * Database
 * Users
 * Challenges
 * Friends
 * Histories
 * TestCases
 * UsersChallenges
 */

// database SQL statements to create, drop, and use a database
export const createDatabase = async () => {
  try {
    await db.queryAsync(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database ', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.queryAsync(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.queryAsync(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

// user table - creation and deletion

export const createUserTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS users
      (
      id SERIAL,
      email VARCHAR(255) UNIQUE NOT NULL,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      clout INT,
      kdr INT,
      CONSTRAINT users_pk 
        PRIMARY KEY(id)
      )
      `
    );
    success('successfully created users table');
  } catch (err) {
    error('error creating users table ', err)
  }
};

export const dropUserTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  } catch (err) {
    error('error dropping users table ', err);
  }
};

// challenge table - creation and deletion

export const createChallengeTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS challenges
      (
        id SERIAL,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        difficulty INT NOT NULL,
        rating INT,
        CONSTRAINT challenges_pk 
          PRIMARY KEY(id)
      )
      `
    );
    success('successfully created challenges table');
  } catch (err) {
    error('error creating challenges table ', err);
  }
};

export const dropChallengeTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS challenges`
    );
    success('successfully dropped challenges table');
  } catch (err) {
    error('error dropping challenges table ', err);
  }
};

// users-challenges table - creation and deletion

export const createUsersChallengesTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS usersChallenges
      (
        id SERIAL,
        user_id INT NOT NULL,
        challenge_id INT NOT NULL,
        type INT NOT NULL,
        CONSTRAINT usersChallenges_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_usersChallenges_user_id
          FOREIGN KEY(user_id) REFERENCES users(id),
        CONSTRAINT fk_usersChallenges_challenge_id
          FOREIGN KEY(challenge_id) REFERENCES challenges(id)
      )
      `
    );
    success('succesfully created usersChallenges table')
  } catch (err) {
    error('error creating usersChallenges table ', err);
  }
};

export const dropUsersChallengesTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS usersChallenges`
    );
  } catch (err) {
    error('error dropping users-challenges table ', err);
  }
};

// history table - creation and deletion

export const createHistoryTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS histories
      (
        id SERIAL,
        outcome INT NOT NULL,
        time VARCHAR(255) NOT NULL,
        clout INT NOT NULL,
        user_id INT NOT NULL,
        challenger_id INT NOT NULL,
        challenge_id INT NOT NULL,
        CONSTRAINT histories_pk 
          PRIMARY KEY(id),
        CONSTRAINT fk_histories_user_id 
          FOREIGN KEY(user_id) REFERENCES users(id)
          ON DELETE CASCADE,
        CONSTRAINT fk_histories_challenger_id 
          FOREIGN KEY(challenger_id) REFERENCES users(id)
          ON DELETE CASCADE,
        CONSTRAINT fk_histories_challenge_id 
          FOREIGN KEY(challenge_id) REFERENCES challenges(id)
          ON DELETE CASCADE
      )
      `
    );
    success('successfully created histories table');
  } catch (err) {
    error('error creating histories table ', err);
  }
};

export const dropHistoryTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS histories`
    );
    success('successfully dropped histories table');
  } catch (err) {
    error('error dropping histories table ', err);
  }
};

// test cases table - creation and deletion

export const createTestCaseTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS testCases
      (
        id SERIAL,
        content text NOT NULL,
        challenge_id INT NOT NULL,
        CONSTRAINT testCases_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_testCases_challenge_id 
          FOREIGN KEY(challenge_id) REFERENCES challenges(id)
          ON DELETE CASCADE
      )
      `
    );
    success('successfully created test cases table');
  } catch (err) {
    error('error creating test cases table ', err);
  }
};

export const dropTestCaseTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS testCases`
    );
    success('successfully dropped test cases table');
  } catch (err) {
    error('error dropping test cases table ', err);
  }
};

// sabotages table - creation and deletion

export const createSabotageTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS sabotages
      (
        id SERIAL,
        content VARCHAR(255) NOT NULL,
        history_id INT,
        CONSTRAINT sabotages_pk
          PRIMARY KEY(id),
        CONSTRAINT fk_sabotages_history_id
          FOREIGN KEY(history_id) REFERENCES histories(id)
          ON DELETE CASCADE
      )
      `
    );
    success('successfully created sabotages table');
  } catch (err) {
    error('error creating sabotages table ', err);
  }
};

export const dropSabotageTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS sabotages`
    );
    success('successfully dropped sabotages table');
  } catch (err) {
    error('error dropping sabotages table ', err);
  }
};

// friends table - creation and deletion

export const createFriendTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS friends
      (
        id SERIAL,
        user_id INT NOT NULL,
        friend_id INT NOT NULL,
        CONSTRAINT friends_pk
        PRIMARY KEY(id),
        CONSTRAINT fk_friends_user_id
        FOREIGN KEY(user_id) REFERENCES users(id),
        CONSTRAINT fk_friends_friend_id
        FOREIGN KEY(friend_id) REFERENCES users(id)
      )
      `
    )
    success('successfully created friends table');
  } catch (err) {
    error('error creating friends table ', err);
  }
};

export const dropFriendTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS friends`
    )
    success('successfully dropped friends table');
  } catch (err) {
    error('error dropping friends table');
  }
};

// messages table - creation and deletion

export const createMessageTable = async () => {
  try {
    await db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS messages
      (
        id SERIAL,
        sender_id INT NOT NULL,
        receiver_id INT NOT NULL,
        content VARCHAR(255),
        CONSTRAINT messages_pk
        PRIMARY KEY(id),
        CONSTRAINT fk_messages_receiver_id
        FOREIGN KEY(receiver_id) REFERENCES users(id),
        CONSTRAINT fk_messages_sender_id
        FOREIGN KEY(sender_id) REFERENCES users(id)
      )
      `
    )
    success('successfully created messages table');
  } catch (err) {
    error('error creating messages table ', err);
  }
};

export const dropMessageTable = async () => {
  try {
    await db.queryAsync(
      `DROP TABLE IF EXISTS messages`
    )
    success('successfully dropped messages table');
  } catch (err) {
    error('error dropping messages table ', err);
  }
};
