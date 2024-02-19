//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js");


const app = express();

let items = ["server_side_item_1", "server_side_item_2", "server_side_item_3"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static("public"));

app.get("/", function(req, res){
   
let day = date();

        res.render("index", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});
let message = "message";
app.get("/about", function(req, res){
    res.render("about", {aboutStuff: message});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});