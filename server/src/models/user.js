const pool = require("../config/db");

const createUser = async (name, email, password ) => {
  return await pool.query(
    "INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *",
    [name, email, password ]
  );
};

const findUserByEmail = async (email) => {
  return await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );
};

const blockUserModel = async (id) => {
  return await pool.query(
    "UPDATE users SET is_blocked=true WHERE id=$1 RETURNING *",
    [id]
  );
}

const UnblockUserModel = async (id) => {
  return await pool.query(
    "UPDATE users SET is_blocked=false WHERE id=$1 RETURNING *",
    [id]
  );
}


module.exports = { createUser, findUserByEmail , blockUserModel , UnblockUserModel };