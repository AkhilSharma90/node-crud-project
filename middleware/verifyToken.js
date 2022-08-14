const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_KEY;
const MASTER_KEY = process.env.MASTER_KEY;

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

const verifyAdmin = (req, res, next) => {
    const token = req.header("admin-token");
    if (!token) return res.status(400).send("access denied");
  
    try {
      const verifiedAdmin = jwt.verify(token, MASTER_KEY);
      req.admin = verifiedAdmin;
      next();
    } catch (err) {
      res.status(400).send("invalid token");
    }
};

module.exports = { verifyUser, verifyAdmin }