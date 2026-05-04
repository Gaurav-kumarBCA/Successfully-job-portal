module.exports = (req, res, next) => {
    if (!req.loginUser || req.loginUser.role !== "recruiter") {
        return res.status(403).json({
            success: false,
            message: "Access denied"
        });
    }
    next();
};