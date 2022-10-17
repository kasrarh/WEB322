var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"login"));
});

app.listen(HTTP_PORT, onHttpStart);