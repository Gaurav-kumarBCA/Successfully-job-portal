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

const getAlluserModel = async () =>{
  return await pool.query (
    "SELECT * FROM users ORDER BY id DESC"
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


const findUserById = async(id)=>{
   return await pool.query(
      "SELECT is_blocked FROM users WHERE id=$1",
      [id]
   )
}

const profileModel = async(id)=>{
   return await pool.query(
      `
      SELECT 
        id,
        name,
        email,
        is_blocked
      FROM users
      WHERE id=$1
      `,
      [id]
   )
}

const searchUsers = async (text) => {
  return await pool.query(
    `
    SELECT id,name,email,role
    FROM users
    WHERE
    role != 'admin'
    AND
    (name ILIKE $1
    OR 
    email ILIKE $1)
    ORDER BY id DESC
    `,
    [`%${text}%`]
  );
};

module.exports = { createUser,searchUsers,findUserByEmail , blockUserModel , UnblockUserModel , getAlluserModel , findUserById, profileModel };