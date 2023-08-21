
const auth =require( "./auth/auth.route");
const admin = require("./admin/admin.route");
const tenant = require("./tenant/tenant.route")
const express =require( "express");
let app = express()

app.use("/app",auth);
app.use("/app/admin",admin);
app.use("/app/tenant",tenant)
app.get("/",(req,res)=>{
    res.send("welcome to app");
})


module.exports = app;
