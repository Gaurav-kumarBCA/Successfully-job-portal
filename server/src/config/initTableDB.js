const pool = require("./db");

const ininDB = async () => {
  try {
    await pool.query(`
            CREATE TABLE IF NOT EXISTS users
            (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL ,
            password TEXT NOT NULL,
            role VARCHAR(20) DEFAULT 'user',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS companiesdata
            (
            id SERIAL PRIMARY KEY ,
            company_name VARCHAR(150) NOT NULL,
            description TEXT ,
            website_url VARCHAR(200),
            location VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `);

    await pool.query(`
                CREATE TABLE IF NOT EXISTS jobcreate
                (
                id SERIAL PRIMARY KEY ,
                job_name VARCHAR(150) NOT NULL,
                description TEXT NOT NULL,
                salary INTEGER,
                location VARCHAR(100),
                job_type VARCHAR(50),
                company_id INTEGER REFERENCES companiesdata(id) ON DELETE CASCADE,
                posted_by INTEGER REFERENCES users(id) ON DELETE CASCADE,
                status VARCHAR(20) DEFAULT "pending",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
                `);
    await pool.query(`
               CREATE TABLE IF NOT EXISTS allapplicants (
               id SERIAL PRIMARY KEY,
               job_id INTEGER REFERENCES jobcreate(id) ON DELETE CASCADE,
               user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
               resume TEXT,
               cover_letter TEXT,
               status VARCHAR(50) DEFAULT 'pending',
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
               );
                `);
    await pool.query(`
               CREATE TABLE IF NOT EXISTS save_jobs (
               id SERIAL PRIMARY KEY,
               user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
               job_id INTEGER REFERENCES jobcreate(id) ON DELETE CASCADE,
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
               UNIQUE(user_id, job_id)               
               ) ;
              `);
    await pool.query(`
              CREATE TABLE IF NOT EXISTS create_recruiter (
              id SERIAL PRIMARY KEY,
              name VARCHAR (100) NOT NULL,
              company_name VARCHAR (200) NOT NULL,
              email VARCHAR(100) UNIQUE NOT NULL,
              password TEXT NOT NULL,
              role VARCHAR (100) NOT NULL,
              phone VARCHAR (100) NOT NULL,
              company_description VARCHAR (100) NOT NULL,
              company_website  VARCHAR (100),
              industry_type  VARCHAR (100) NOT NULL
              );
             `);

    await pool.query(`
             CREATE TABLE IF NOT EXISTS appliedform_recruiter (
             id SERIAL PRIMARY KEY,
             name VARCHAR (100) NOT NULL,
             company_name VARCHAR (200) NOT NULL,
             company_email VARCHAR (100) UNIQUE NOT NULL,
             company_description VARCHAR (100) NOT NULL,
             phone VARCHAR (100) NOT NULL,
             company_website VARCHAR(100),
             industry_type VARCHAR (100) NOT NULL,
             status VARCHAR(20) DEFAULT 'pending'
             );
      `)         

    await pool.query(`
              CREATE TABLE IF NOT EXISTS follow_companies(
              id SERIAL PRIMARY KEY,
              user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
              company_id INTEGER REFERENCES companiesdata(id) ON DELETE CASCADE,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              UNIQUE(user_id, company_id)
              ); 
      `)

    await pool.query(`
              CREATE TABLE IF NOT EXISTS notification(
              id SERIAL PRIMARY KEY,
              user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
              message TEXT,
              is_read BOOLEAN DEFAULT false,
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              )  ;
      `)
                
    console.log("tables ready");
  } catch (error) {
    console.error(error);
  }
};

module.exports = ininDB;
