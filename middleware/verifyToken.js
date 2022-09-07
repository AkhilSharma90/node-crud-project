const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;

const verifyUser = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token) return res.status(400).send("access denied");
  
    try {
      const verifiedUser = jwt.verify(token, JWT_KEY);
      req.user = verifiedUser;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
};



module.exports = { verifyUser}