const router = require("express").Router();
const adminController = require("../controllers/adminController");
const userController = require("../controllers/userController");
const { verifyUser, verifyAdmin } = require("../middleware/verifyToken");

router.post("/", adminController.signUp)

router.post("/login", adminController.logIn)

router.patch('/:userId', adminController.updateAdmin);

router.delete('/:userId', adminController.deleteAdmin); //delete admin

router.delete('/user/:userId', userController.deleteUser); //delete user

router.get("/data", verifyAdmin, adminController.data)

module.exports = router;
