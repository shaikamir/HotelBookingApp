const mongoose = require("mongoose");

const getHotelDetails = mongoose.Schema({
    name: String,
    description: String,
    rating: String,
    img: String,
    address: String,
    phoneNo: String
})

const getHotels = mongoose.model("getHotels123", getHotelDetails);

module.exports = getHotels;