//FIRST REQUIRE EXPRESS
var express = require("express");
var router = express.Router();

router
.route("/json") //THIS IS THE ROUTE WE WANT TO USE
.get(function(req, res) { //THIS IS THE METHOD WE WANT TO USE. INSIDE THE BRACKETS IS THE CALL BACK FUNCTION YOU WANT TO RUN WHEN THE ROUTE IS CALLED
  console.log("GET the json"); //CODE STARTING AT FUNCTION IS CODE THAT WAS SITTING IN APP.JS BUT BECAUSE WE NEED TO MOVE DIFF TYPES OF CODES TO DIFFERENT FOLDERS, WE MOVED IT IN HERE & DELETED IT FROM APP.JS
  res
  .status(200)
  .json({"jsonData" : true} );
})

//USING POST METHOD
.post(function(req, res) {
  console.log("POST the json route");
  res
  .status(200)
  .json({"jsonData" : "POST received"} );
});


module.exports = router;
