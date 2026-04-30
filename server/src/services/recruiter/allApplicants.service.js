const { getAllApplicants } = require("../../models/applicants");

const getAllApplicantsDB = async () => {
    const data = await getAllApplicants();

    if(data.rows.length === 0){
        throw new Error("No applicants found");
    }

    return data.rows;
};

module.exports = { getAllApplicantsDB };