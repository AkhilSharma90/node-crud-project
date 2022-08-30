const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/", productController.createProduct);
router.get("/show", productController.getProducts);

module.exports = router;