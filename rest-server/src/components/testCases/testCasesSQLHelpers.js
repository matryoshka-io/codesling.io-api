export const addTestCaseHelper = ({ content, challenge_id }) => {
  return `
    INSERT INTO testCases (content, challenge_id)
    VALUES ('${content}', ${challenge_id})
  `;
};

export const getTestCaseHelper = (challengeId) => {
  return `
    SELECT content FROM testcases WHERE challenge_id = ${challengeId}
  `;
};
