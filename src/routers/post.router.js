const express = require('express');

const router = express.Router();

const { validateCreatePost, validateUpdatePost } = require('../middlewares/post.middleware');
const auth = require('../middlewares/auth');

const { post } = require('../controllers');

router.delete('/:id', auth, post.deleteByIdAndUser);

router.put('/:id', auth, validateUpdatePost, post.updateByIdAndUser);

router.get('/:id', auth, post.getByIdAndUser);

router.get('/', auth, post.getAllByUser);

router.post('/', auth, validateCreatePost, post.create);

module.exports = router;