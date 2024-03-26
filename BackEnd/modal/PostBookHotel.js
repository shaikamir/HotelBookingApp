const mongoose = require("mongoose");

const postBookHotel = mongoose.Schema({
    hotelName: String,
    frmDate: String,
    toDate: String,
    noOfPersons: String
})

const bookingHotel = mongoose.model("postBookHotel", postBookHotel);

module.exports = bookingHotel