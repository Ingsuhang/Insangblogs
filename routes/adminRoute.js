const express = require('express');
const adminctrl = require('../controllers/admin.controller');
const app = express();

app.get("/",adminctrl.blogOne)
app.get("/blog",adminctrl.blogTwo)
app.get("/blog-setup",adminctrl.blogSetting)

module.exports = app;