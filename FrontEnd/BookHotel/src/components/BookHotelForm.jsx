import axios from 'axios';
import React, { useRef, useState } from 'react'

const BookHotelForm = ({hotelName, fnClosePopup}) => {
    const fromDate = useRef('');
    const toDate = useRef('');
    const noOfPersons = useRef('');
    let [validationMsg, setvalidationMsg] = useState('');
    let [successMsg, setSuccessMsg] = useState('')

    let fnBook = async () =>{
      let bookFormData = ({hotelName: hotelName, frmDate: fomatDate(fromDate.current.value), toDate: fomatDate(toDate.current.value), noOfPersons: noOfPersons.current.value})
      if(!bookFormData.frmDate || !bookFormData.toDate || !bookFormData.noOfPersons){ 
        return setvalidationMsg("All fields are required")
      }
      else if(bookFormData.frmDate >= bookFormData.toDate){
        return setvalidationMsg("To Date shud be greater than from Date")
      }
      else if(bookFormData.noOfPersons > 4){
        return setvalidationMsg("More than 4 persons are not allowed")
      }
      else {
        let bookingHotel =  await axios.post('http://localhost:3200/bookHotel', bookFormData);
        console.log("After booking hotel", bookingHotel.data.msg)
        setSuccessMsg(bookingHotel.data.msg)
        setvalidationMsg("")
        setTimeout(() =>{
          fnClosePopup()
        }, 3000)
        return
      }
    }

    let fomatDate = (dateString) => {
      const [year, month, date] = dateString.split('-');
      return `${date}-${month}-${year}`
    }

    if((validationMsg && validationMsg != '') || (successMsg && successMsg != '')){
      setTimeout(() =>{
        setvalidationMsg("")
        setSuccessMsg("")
      }, 4000)
    }

  return (
    <div>
      <div className='fixed inset-0 backdrop-blur-sm flex justify-center items-center bg-opacity-25'>
        <div className='flex flex-col w-5/12 bg-amber-500 p-4 text-white rounded-lg'>
        {validationMsg && <div className='font-bold text-2xl bg-red-600 rounded-lg p-2'>{validationMsg}</div> }
        {successMsg && <div className='font-bold text-2xl bg-blue-600 rounded-lg p-2'>{successMsg}</div>}
            <div className='flex justify-between'>
                <h1 className='font-bold font-serif text-2xl'>Welcome to {hotelName}</h1>
                <div className="text-white cursor-pointer" onClick={fnClosePopup}>&#10005;</div>
            </div>
        <label htmlFor="frmDate" className='font-semibold'>From Date</label>
        <input type='date' className='p-2 text-black mb-1' ref={fromDate} name='frmDate'/>

        <label htmlFor="toDate" className='font-semibold'>To Date</label>
        <input type='date' className='p-2 text-black mb-1' ref={toDate} name='toDate'/>

        <label htmlFor="noOfPersons" className='font-semibold'>No of persons</label>
        <input type='text' className='p-2 text-black mb-1' ref={noOfPersons} name='noOfPersons'/>

        <button className='bg-black py-0.5 text-white font-bold w-2/12 rounded-lg mt-2' onClick={fnBook}>Book</button>
        </div>
    </div>
    </div>
    
  )
}

export default BookHotelForm