import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookHotelForm from './BookHotelForm';

const Hotels = ({hotelData}) => {

  let [blnOpenPopup, setBlnOpenpopup] = useState(false);
  let [getHotelName, setHotelName] = useState("")

  let fnOpenPopup = (name) =>{
    setBlnOpenpopup(true)
    setHotelName(name)
  }

  return (
    <div>
      <div className="bg-white flex justify-between items-center rounded-lg p-4 m-4 w-4/5">
        <div className='flex'>
        <img className="w-32" src={hotelData.img} alt="hotel-img" />
        <div className="flex flex-col mx-4">
          <h1 className="text-2xl font-bold font-serif">{hotelData.name}</h1>
          <h1 className="font-normal">{hotelData.description}</h1>
          <h1 className="font-normal"><span className='font-bold'>City: </span>{hotelData.address}</h1>
          <h2 className='font-normal'><span className='font-bold'>Contact No:</span> {hotelData.phoneNo}</h2>
        </div>
        </div>
        <div className="flex flex-col">
          <button className="bg-amber-700 rounded-lg px-2 py-1 text-white font-bold my-2" onClick={() => fnOpenPopup(hotelData.name)}>
            Book
          </button>
        </div>
      </div>
      {blnOpenPopup && <BookHotelForm hotelName={hotelData.name} fnClosePopup={() => setBlnOpenpopup(false)}/>}
    </div>
  );
}

export default Hotels