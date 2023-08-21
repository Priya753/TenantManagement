const router =require( "./route");
const express =require( "express");
const app = express();

app.use(express.raw());
app.use(express.urlencoded({extended:true}));
app.use(express.json({type:"*/*"}));
app.use(router);

module.exports = app;

