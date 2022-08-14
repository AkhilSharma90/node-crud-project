const router = require("express").Router();
const cartController = require("../controllers/cartController");
const { verifyUser, verifyAdmin } = require("../middleware/verifyToken");

router.post("/", cartController.createOrder);

router.get("/:cartId", cartController.getOrder);

router.get("/show/:userId", cartController.getAllOrders);
// router.get("/cart", verifyUser, cartController.cart);

module.exports = router;
