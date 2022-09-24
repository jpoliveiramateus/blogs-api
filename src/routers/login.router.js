const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middlewares/login.middleware');
const { login } = require('../controllers');

router.post('/', validateLogin, login);

module.exports = router;