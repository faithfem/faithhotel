/*require("./instanthello");
var goodbye = require("./talk/goodbye");
var talk = require("./talk");
var question = require("./talk/question");

talk.intro();
talk.hello("Simon");

var answer = question.ask("What is the meaning of life?");
console.log(answer);

goodbye();*/


var express = require("express");
var app = express();

app.set("port",3000);

app.listen(app.get("port"), function(){
  console.log("Magic happens on port " + app.get("port"));
});
