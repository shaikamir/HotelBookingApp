const express = require("express");
const cors = require("cors");
const HotelDetailsSchema = require("./modal/SchemaModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const getHotelModel = require('./modal/GetHotelsModel');
const bookingHotel = require("./modal/PostBookHotel");
const PORT = process.env.BASE_URL || 3200;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:Amir123@cluster0.b4ynqke.mongodb.net/")

app.post('/register', async (req, res) => {
    const inputBody = req.body;

    const existingUser = await HotelDetailsSchema.findOne({ $or: [{ name: inputBody.name }, { email: inputBody.email }] });

    if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
    }

    // const hashedPassword = await bcrypt.hash(inputBody.password, 10);

    await HotelDetailsSchema.create(inputBody)
    .then(hotel => res.status(200).json({ message: "Hotel Booked successfully" }))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/login', async (req, res) =>{
    const inputBody = req.body;

    const blnCheckUser = await HotelDetailsSchema.findOne({email: inputBody.email})

    if(!blnCheckUser){
        return res.status(200).send({"content": "User does not exist"})
    }

    return res.status(200).send({"content": "User logged in successfully"})
    
    
})

app.get('/getHotels', async (req, res) => {
    try {
        let hotels = await getHotelModel.find();
        console.log("Hotels found:", hotels); // Log the retrieved hotels
        res.status(200).json(hotels);
    } catch (error) {
        console.error("Error fetching hotels:", error);
        res.status(500).send({"content": "Internal Server Error"});
    }
});

app.post('/bookHotel', async (req, res) =>{
    const reqBody = req.body;

    await bookingHotel.create(reqBody)
    .then(() => {res.status(200).json({msg: "Hotel Booked successfully"})})
    .catch((err) => res.status(500).json({msg: err.message}))
})

app.get('/getBookings', async (req, res) =>{
    try{
        let bookings = await bookingHotel.find();
        res.status(200).json(bookings)
    }
    catch(error){
        res.status(500).send("Some error occured, please try after again")
    }
})

app.get('/deleteBookedHotel/:queryId', async (req, res) =>{
    try{
        const query = req.params.queryId;
        let deleteItem = await bookingHotel.findByIdAndDelete(query);

        res.status(200).json({"type": "success", "msg": "Deleted successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).send({"type": "error", "msg": "Having technical problem, pls try agai"})
    }
})

app.listen(3200, () =>{
    console.log("App is listening at 3000")
})