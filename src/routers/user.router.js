const express = require('express');

const router = express.Router();

const { validateCreateUser } = require('../middlewares/create.user.middleware');
const auth = require('../middlewares/auth');

const { user } = require('../controllers');

router.get('/:id', auth, user.getById);

router.get('/', auth, user.getAll);

router.post('/', validateCreateUser, user.create);

module.exports = router;