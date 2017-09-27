//FIRST REQUIRE EXPRESS
var express = require("express");
var router = express.Router();

var ctrlHotels = require("../controllers/hotels.controllers.js"); //TO REQUIRE THE GET JSON FILE THAT WAS MOVED TO HOTELS CONTROLLERS.JS FROM HERE BELOW

/*router
.route("/hotels") //THIS IS THE ROUTE WE WANT TO USE
.get(function(req, res) { //THIS IS THE METHOD WE WANT TO USE. INSIDE THE BRACKETS IS THE CALL BACK FUNCTION YOU WANT TO RUN WHEN THE ROUTE IS CALLED
console.log("GET the json"); //CODE STARTING AT FUNCTION IS CODE THAT WAS SITTING IN APP.JS BUT BECAUSE WE NEED TO MOVE DIFF TYPES OF CODES TO DIFFERENT FOLDERS, WE MOVED IT IN HERE & DELETED IT FROM APP.JS
  res
  .status(200)
  .json({"jsonData" : true} );
});*/ //CODE BETWEEN MOVED TO HOTELS CONTROLLERS.JS


router
.route("/hotels")
.get(ctrlHotels.hotelsGetAll); //hotelsGetAll is from hotels.controller.js file module.exports line


router
.route("/hotels/:hotelId")
.get(ctrlHotels.hotelsGetOne);//CHANGE FROM HOTELS GETALL TO GETONE. SEE REQUIRE PART OF THIS IN HOTELS CONTROLLERS.

router
.route("/hotels/new")
.get(ctrlHotels.hotelsAddOne);

module.exports = router;
