const express = require('express');

const router = express.Router();

const { validateCreateUser } = require('../middlewares/create.user.middleware');
const { user } = require('../controllers');

router.post('/', validateCreateUser, user.create);

module.exports = router;