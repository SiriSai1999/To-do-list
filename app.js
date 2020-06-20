// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

var items = ["Buy Food","Cook Food","Eat Food"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  let day = date();

  res.render("list", {name: day, newItems: items});
  console.log(day);
});

app.get("/work",function(req, res){
  res.render("list", {name: "Work List", newItems:workItems});
});

app.post("/",function(req, res){

  if(req.body.button === 'Work'){
    workItems.push(req.body.newItems);
    res.redirect("/work");
  }else
  {
    items.push(req.body.newItems);
    res.redirect("/");
  }
});

app.listen("3000", function(){
  console.log("Server started");
});
