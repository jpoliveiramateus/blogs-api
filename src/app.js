const express = require('express');
const { loginRoutes, userRoutes } = require('./routers');

const error = require('./middlewares/err');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

app.use(error);

module.exports = app;