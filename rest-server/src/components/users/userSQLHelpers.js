export const fetchAllUserHelper = () => {
  return `
    SELECT id, email, username, password, clout, kdr
    FROM users
  `;
}

export const fetchUserHelper = (user_id) => {
  return `
    SELECT id, email, username, password, clout, kdr
    FROM users
    WHERE id=${user_id}
  `;
};

export const updateCloutHelper = (user_id) => {
  return `
    UPDATE users SET clout = clout + 1
    WHERE id = ${user_id}
  `
};

export const fetchUserByEmailHelper = (email) => {
  return `
    SELECT id
    FROM users
    WHERE email = '${email}'
  `
};

export const getUserCloutHelper = (user_id) => {
  return `
    SELECT clout
    FROM users
    WHERE id = ${user_id}
  `
};