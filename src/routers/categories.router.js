const express = require('express');

const router = express.Router();

const { validateCreateCategory } = require('../middlewares/category.middleware');
const auth = require('../middlewares/auth');

const { categories } = require('../controllers');

router.get('/', auth, categories.getAll);

router.post('/', auth, validateCreateCategory, categories.create);

module.exports = router;