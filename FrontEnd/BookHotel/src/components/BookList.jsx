import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BookList = () => {
  let [bookList, setBookList] = useState(null)

  let getBookingsList = async () =>{
    let listData = await axios.get('http://localhost:3200/getBookings')
    console.log("bookingsData", listData.data)
    setBookList(listData.data)
  }

  let fnCancel = async (hotelId) =>{
    console.log("cancel click")

    const toCancelHotel = await axios.get(`http://localhost:3200/deleteBookedHotel/${hotelId}`);

    if(toCancelHotel.data.type == 'success'){
      let filtered = bookList.filter(item => item._id != hotelId)
      setBookList(filtered)
    }
  }

  useEffect(() =>{
    getBookingsList()
  }, [])

  return (
    <div className='flex'>
      {!bookList && (
        <div className="bg-amber-600 rounded-lg text-white text-2xl font-bold p-3 flex justify-center items-center">
          <img
            className="w-20"
            src="https://static8.depositphotos.com/1029150/894/i/950/depositphotos_8941896-stock-photo-empty-box.jpg"
            alt="rmpty-img"
          />
          <h1 className="ml-2">No records found</h1>
        </div>
      )}
      {bookList &&
        bookList.map((eachData) => (
            <div className="bg-amber-600 p-2 text-white m-2 rounded-sm">
            <h1> <span className='font-semibold'>Hotel</span>: {eachData.hotelName}</h1>
            <h1> <span className='font-semibold'>From date</span>: {eachData.frmDate}</h1>
            <h1> <span className='font-semibold'>To date</span>: {eachData.toDate}</h1>
            <h1> <span className='font-semibold'>No of persons</span>: {eachData.noOfPersons}</h1>
            <button className='bg-gray-600 text-white font-bold p-1.5 mt-2 rounded-lg' onClick={() => fnCancel(eachData._id)}>Cancel</button>
          </div>
        ))}
    </div>
  );
}

export default BookList