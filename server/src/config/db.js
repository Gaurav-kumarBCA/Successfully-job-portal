require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,

});

pool.connect()
  .then(() => console.log("✅ DATABASE CONNECTED SUCCESSFULLY"))
  .catch(err => console.log("❌ DATABASE NOT CONNECTED:", err.message));

module.exports = pool;