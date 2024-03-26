const mongoose = require("mongoose");

const HotelSchema = mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNo: String,
    password: String
})

const HotelDetailsSchema = mongoose.model("hotelbookingapps", HotelSchema);

module.exports = HotelDetailsSchema;