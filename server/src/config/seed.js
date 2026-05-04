require("dotenv").config();

const { hasspassword } = require("../utility");
const pool = require("./db");


const saltRound = 10;

const dbSeed = async () => {
    try {
        console.log("Database Seeding...");

        const hash = await hasspassword("admin", saltRound);

        // 🔥 check if already exists
        const check = await pool.query(
            "SELECT * FROM users WHERE email=$1",
            ["admin@gmail.com"]
        );

        if (check.rows.length > 0) {
            console.log("Admin already exists!");
            return process.exit(0);
        }

        // 🔥 insert admin
        const result = await pool.query(
            `INSERT INTO users (name, email, password, role)
             VALUES ($1,$2,$3,$4) RETURNING *`,
            ["Admin", "admin@gmail.com", hash, "admin"]
        );

        console.log(result.rows[0]);
        console.log("Admin Created Successfully!");

        process.exit(0);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

dbSeed();