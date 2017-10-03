require("./api/data/dbconnection.js").open();


var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

var routes = require("./api/routes");

app.set('port', 3000);

//NEW CODE VIDEO 10 MIDDLEWARE

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

//END OF NEW CODE VIDEO 10

app.use(express.static(path.join(__dirname, 'public')));

//app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({ extended : false })); //PREFERABLE TO USE FALSE COZ ONLY NEED FORMS AND STRINGS. TRUE WILL GIVE U OTHER DATA TYPES BUT U DON'T USUALLY NEED THOSE

app.use("/api", routes);

/* AFTER CREATING THE ROUTES, WE DON'T NEED THE CODE BELOW. IT HAS BEEN MOVED IN ORDER TO SEPARATE FUNCTIONS PER VIDEO 11
app.get("./json", function(req, res) {
  console.log("GET the json");
  res
  .status(200)
  .json({"jsonData" : true} );
});
app.get("/file", function(req, res) {
  console.log("GET the file");
  res
  .status(200)
  .sendFile(path.join(__dirname, "app.js"));
});*/

var server = app.listen(app.get("port"), function(){
  var port = server.address().port;
  console.log("Magic happens on port " + port);
});
