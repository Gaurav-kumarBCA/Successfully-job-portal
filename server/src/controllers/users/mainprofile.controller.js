const { mainUserProfileDB, getProfileService, editProfileService } = require("../../services/user/mainprofile.services");

const mainUserProfile = async (req,res)=>{

    try{
        const user_id = req.loginUser.id;

        const{
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
            skills
        }=req.body;

        const data=await mainUserProfileDB(
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

        return res.status(201).json({

            success:true,

            message:"Profile Created",

            data

        });

    }

    catch(error){

        return res.status(400).json({

            success:false,

            message:error.message

        });

    }

};

const getProfile = async (req, res) => {

    try {

        const  user_id  = req.loginUser.id;
      

console.log("USER ID =", user_id);
// console.log(req.body);

        const profile = await getProfileService(user_id);
        console.log(profile)

        return res.status(200).json({
            success: true,
            data: profile,
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message,
        });

    }

};

const editProfile = async (req, res) => {
    try {

        console.log(req.params);
        console.log(req.body);

        const  user_id  = req.loginUser.id;

        const data = await editProfileService(user_id, req.body);

        return res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            data
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {mainUserProfile,getProfile,editProfile};