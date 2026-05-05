module.exports = (req, res, next) => {
    if (req.loginUser.role !== "user") {
        return res.status(403).json({
            success: false,
            message: "Only users allowed"
        });
    }
    next();
};