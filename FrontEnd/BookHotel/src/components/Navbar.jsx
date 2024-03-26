import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location = useLocation();
  let currentRoute = location.pathname
  return (
    <div className='bg-red-950 p-2 flex justify-between items-center'>
            <Link to={"/home"}><h1 className='text-2xl text-white font-semibold italic cursor-pointer'>BonStay</h1> </Link>
        <div className='flex'>
        {currentRoute !== '/' && currentRoute !== '/login' && (
        <>
          <Link className='font-semibold text-white mx-2' to={"/home"}>Home</Link>
          <Link className='font-semibold text-white mx-2' to={"/listOfHotels"}>Hotels</Link>
          <Link className='font-semibold text-white mx-2' to={"/bookList"}>Bookings</Link>
        </>
      )}
        </div>
    </div>
  )
}

export default Navbar