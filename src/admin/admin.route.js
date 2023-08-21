
const AdminController = require("./admin.controller");
const express = require("express");
const app = express();

app.post("/adduser",AdminController.addTenantData);
module.exports =  app;
  