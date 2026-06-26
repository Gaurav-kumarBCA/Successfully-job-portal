const pool = require("../../config/db");
const {
    duplicateProfile,
    profileModel,
    getProfileById,
    updateProfileModel
} = require("../../models/mainUserProfile");

const mainUserProfileDB = async (
    user_id,
    name,
    email,
    phone,
    location,
    role,
    education,
    experience,
    about,
    github,
    linkedin,
    portfolio,
    resume,
    skills,
) => {

    if (
        !name ||
        !email ||
        !phone ||
        !location ||
        !role ||
        !education ||
        !experience
    ) {
        throw new Error("All required fields are mandatory");
    }

    const exists = await duplicateProfile(name,email);

    if(exists.rows.length>0){
        throw new Error("Profile already exists");
    }

    const profile = await profileModel(
        user_id,
        name,
        email,
        phone,
        location,
        role,
        education,
        experience,
        about,
        github,
        linkedin,
        portfolio,
        resume,
        skills,
    );

    return profile.rows[0];
};

const getProfileService = async (user_id) => {

    if (!user_id) {
        throw new Error("User ID is required");
    }

    const result = await getProfileById(user_id);

    if (result.rows.length === 0) {
        throw new Error("Profile not found");
    }

    return result.rows[0];
};


const editProfileService = async (user_id, data) => {

    if (!user_id) {
        throw new Error("User  ID is required");
    }

    const profile = await updateProfileModel(user_id, data);

    if (profile.rows.length === 0) {
        throw new Error("Profile not found");
    }

    return profile.rows[0];
};


module.exports = {mainUserProfileDB,getProfileService, editProfileService
};