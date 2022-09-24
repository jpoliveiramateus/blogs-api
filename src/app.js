const express = require('express');
const { loginRoutes, userRoutes } = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

module.exports = app;