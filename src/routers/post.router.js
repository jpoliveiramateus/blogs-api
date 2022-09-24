const express = require('express');

const router = express.Router();

const { validateCreatePost } = require('../middlewares/post.middleware');
const auth = require('../middlewares/auth');

const { post } = require('../controllers');

router.get('/', auth, post.getAllByUser);

router.post('/', auth, validateCreatePost, post.create);

module.exports = router;