
const TenantController = require("./tenant.controller");
const express = require("express");
const app = express();

app.post("/book_now", TenantController.bookNow);
app.post("/form", TenantController.getRequire);
app.post("/info", TenantController.getData );
  
module.exports = app;