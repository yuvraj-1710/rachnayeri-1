var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rachnayeri:rachnayeri@1710@cluster0-k5erd.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var dbSchema =  new mongoose.Schema({
email : String
});
var DB = mongoose.model("DB" , dbSchema);
app.get("/" , function(req, res){
    res.render("index.ejs");
});
app.get("/complaint", function(req, res){
res.render("new.ejs");
});
app.post("/" , function(req , res){
    DB.create(req.body.db , function(err,newdb){
        if(err){
            console.log("error");
        }
        else{
            
            res.render("success.ejs");
        }
    });
});
app.get("/content",function(req, res){
    res.render("content.ejs")
});
app.get("/new",function(req, res){
    res.render("new.ejs")
});

app.get("/Love", function(req, res){
    res.render("love.ejs");
});
app.get("/Motivational", function(req, res){
    res.render("motivational.ejs");
});
app.get("/Sad", function(req, res){
    res.render("sad.ejs");
});
app.get("/Nature", function(req, res){
    res.render("nature.ejs");
});
app.get("/Humanity", function(req, res){
    res.render("humanity.ejs");
});
app.listen(process.env.port|8080 , function(){
    console.log("server started");
});
