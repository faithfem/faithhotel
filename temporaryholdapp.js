/*var express = require("express");
var app = express();

app.set("port", process.env.PORT);

app.get("/", function(req, res) {
    console.log("GET the homepage");
    res
    .status(200)
    .sendFile(path.join(__dirname, "public", "index.html"));
});


//CODE BELOW IS NOT WORKING - DID NOT LOAD THE LAST 5 MINUTES OF VIDEO 8 AS IT WILL NOT WORK
app.get("/", function(req, res){
    console.log("GET the homepage");
    res
    .status(404)
    .send("Express yourself");
});

app.get("/json, function(req, res){
    console.log("Get the json");
    res
    .status(200)
    .json("jsonData" : true} );
});


var server = app.listen(app.get("port"), function() { //FEM INSERT A CALL BACK. THIS IS ASYNCHRONOUS SO LINE 9 RUNS BEFORE LINE 7. ASSIGN THE APP.LISTEN TO A VARIABLE SO THAT
var port = server.address().port;
console.log("Magic happens on port " + port); //FEM BCOZ WE MADE LINE 6&7 A VARIABLE, WE CAN JUST CALL THE VARIABLE HERE
});




















// require("./instanthello");
// var goodbye = require("./talk/goodbye");
// var talk = require("./talk")
// var question = require("./talk/question");

// talk.intro();
// talk.hello("Everyone!");
// goodbye();
// var answer = question.ask("What is the meaning of life?");
// console.log(answer);
