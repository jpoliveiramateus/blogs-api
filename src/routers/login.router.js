const express = require('express');

const router = express.Router();

const { validateLogin } = require('../middlewares/login.middleware');
const controllers = require('../controllers');

router.post('/', validateLogin, controllers.login);

module.exports = router;