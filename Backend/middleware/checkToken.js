const jwt = require("jsonwebtoken");
const User=require("../Model/UserModel")

const checkToken = async (req, res, next) => {
  try {
    const token = req.cookies.token; // expecting cookie-parser middleware enabled
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // attach user to request
    req.useremail = user.email;
    next();
  } catch (error) {
    console.error("Token check error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = checkToken;
