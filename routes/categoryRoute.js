const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.post('/', categoryController.createCategory);

router.get('/show', categoryController.getCategories);

module.exports = router;