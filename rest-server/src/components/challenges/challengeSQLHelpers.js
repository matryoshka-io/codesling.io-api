const escape = require('pg-escape');

export const addChallengeHelper = ({ title, content, difficulty }) => {
  return `
    INSERT INTO challenges (title, content, difficulty, rating)
    VALUES ('${escape.string(title)}', '${escape.string(content)}', ${difficulty}, 0)
    RETURNING id, title, content, difficulty
  `;
};

export const addChallengeHelper2 = (testCase, challenge) => {
  return `
    INSERT INTO testcases (content, challenge_id)
    VALUES ('${escape.string(testCase)}', '${challenge}')
    RETURNING id, content, challenge_id
  `;
};