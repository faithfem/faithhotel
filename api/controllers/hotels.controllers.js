var hotelData = require("../data/hotel-data.json");//RETURNING THE HOTEL-DATA JSON API

module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the hotels"); //CODE STARTING AT FUNCTION IS CODE THAT WAS SITTING IN APP.JS BUT BECAUSE WE NEED TO MOVE DIFF TYPES OF CODES TO DIFFERENT FOLDERS, WE MOVED IT IN HERE & DELETED IT FROM APP.JS
  res
  .status(200)
  .json( hotelData );
};
