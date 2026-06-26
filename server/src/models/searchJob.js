const pool = require("../config/db");

const SearchJobsQuery = async (
    search,
    category,
    job_type
) => {

    let query = `
        SELECT
            jobcreate.*,
            companiesdata.company_name,
            companiesdata.website_url
        FROM jobcreate

        JOIN companiesdata
        ON jobcreate.company_id = companiesdata.id

        WHERE jobcreate.status='approved'
    `;

    const values = [];

    if (search) {

        values.push(`%${search}%`);

        query += `
            AND (
                jobcreate.job_name ILIKE $${values.length}

                OR

                jobcreate.location ILIKE $${values.length}

                OR

                companiesdata.company_name ILIKE $${values.length}
            )
        `;
    }

    if (category) {

        values.push(category);

        query += `
            AND jobcreate.category = $${values.length}
        `;
    }

    if (job_type) {

        values.push(job_type);

        query += `
            AND jobcreate.job_type = $${values.length}
        `;
    }

    query += `
        ORDER BY jobcreate.created_at DESC
    `;

    return await pool.query(query, values);

};

module.exports = {
    SearchJobsQuery,
};