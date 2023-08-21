const AuthController = require('./auth.controller');
const express = require('express');
const app = express();

app.post("/signup",AuthController.Register);
app.post("/login",AuthController.login);

module.exports = app;