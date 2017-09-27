var hotelData = require("../data/hotel-data.json");//RETURNING THE HOTEL-DATA JSON API

module.exports.hotelsGetAll = function(req, res) {
  console.log("GET the hotels"); //CODE STARTING AT FUNCTION IS CODE THAT WAS SITTING IN APP.JS BUT BECAUSE WE NEED TO MOVE DIFF TYPES OF CODES TO DIFFERENT FOLDERS, WE MOVED IT IN HERE & DELETED IT FROM APP.JS
  res
  .status(200)
  .json( hotelData );
};

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  var thisHotel = hotelData[hotelId];
  console.log("GET hotelId", hotelId);
  res
  .status(200)
  .json( thisHotel );
};
