const escape = require('pg-escape');

// console.log(escape.literal(`console.log('hi');`));
console.log(escape.literal(`Return 1`));

export const addChallengeHelper = ({ title, content, difficulty }) => {
  return `
    INSERT INTO challenges (title, content, difficulty, rating)
    VALUES (${escape.literal(title)}, ${escape.literal(content)}, ${difficulty}, 0)
    RETURNING id, title, content, difficulty
  `;
};

export const addChallengeHelper2 = (testCase, challenge) => {
  return `
    INSERT INTO testcases (content, challenge_id)
    VALUES (${escape.literal(testCase)}, '${challenge}')
    RETURNING id, content, challenge_id
  `;
};