const pool = require("../config/db")

const profileModel =async (user_id , name , email , phone , location , role , education , experience , about , github ,linkedin , portfolio , resume , skills )=>{
     return await pool.query(
        `INSERT INTO profiles
        (user_id, name , email , phone , location , role , education , experience , about , github ,linkedin , portfolio , resume , skills ) 
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING * `,
        [ user_id, name , email , phone , location , role , education , experience , about , github ,linkedin , portfolio , resume , skills   ]
    );
}

const duplicateProfile =async (name , email)=>{
    return await pool.query(
        "SELECT * FROM profiles WHERE name=$1 AND email=$2",
        [name , email]
    )
}

const getProfileById = async (user_id) => {
  return await pool.query(
    `SELECT * FROM profiles WHERE user_id = $1`,
    [user_id]
  );
};

const updateProfileModel = async (user_id, data) => {

    const keys = Object.keys(data);

    const fields = [];
    const values = [];

    keys.forEach((key, index) => {
        fields.push(`${key} = $${index + 1}`);
        values.push(data[key]);
    });

    values.push(user_id);

    const query = `
        UPDATE profiles
        SET ${fields.join(", ")}
        WHERE user_id = $${values.length}
        RETURNING *;
    `;

    return await pool.query(query, values);
};

module.exports = {profileModel,duplicateProfile,getProfileById,updateProfileModel}