require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
//   user: process.env.DB_USER,

// host: process.env.DB_HOST,

// database: process.env.DB_NAME,

// password: process.env.DB_PASSWORD,

// port: process.env.DB_PORT,

});

pool.connect()
  .then(() => console.log("✅ DATABASE CONNECTED SUCCESSFULLY"))
  .catch(err => console.log("❌ DATABASE NOT CONNECTED:", err.message));

module.exports = pool;