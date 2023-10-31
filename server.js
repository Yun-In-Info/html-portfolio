const express = require ("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.get("/", function(req, res){
   
    res.sendFile(__dirname+"/trial.html")

});

app.listen (3000, function(){
    console.log("Server started on port 3000.")
});