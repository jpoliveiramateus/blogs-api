const express = require('express');
const { loginRoutes, userRoutes, categoriesRoutes, postRoutes } = require('./routers');

const error = require('./middlewares/err');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);

app.use('/user', userRoutes);

app.use('/categories', categoriesRoutes);

app.use('/post', postRoutes);

app.use(error);

module.exports = app;