const express = require('express');

const router = express.Router();

const { validateCreateUser } = require('../middlewares/create.user.middleware');
const auth = require('../middlewares/auth');

const { user } = require('../controllers');

router.post('/', validateCreateUser, user.create);

router.get('/', auth, user.getAll);

module.exports = router;