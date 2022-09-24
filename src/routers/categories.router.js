const express = require('express');

const router = express.Router();

const { validateCreateCategory } = require('../middlewares/category.middleware');
const auth = require('../middlewares/auth');

const { categories } = require('../controllers');

router.post('/', auth, validateCreateCategory, categories.create);

module.exports = router;