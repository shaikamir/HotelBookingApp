import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({currentRoute}) => {
  console.log("currentRoute", currentRoute)
  return (
    <div className='bg-red-950 p-2 flex justify-between items-center'>
            <h1 className='text-2xl text-white font-semibold italic'>BonStay</h1>
        <div className='flex'>
          {currentRoute !== '/' && currentRoute !== '/login' && <Link className='font-semibold text-white mx-2' to={"/home"}>Home</Link>}
            {currentRoute !== '/' && currentRoute !== '/login' && <Link className='font-semibold text-white mx-2' to={"/hotels"}>Hotels</Link>}
            {currentRoute !== '/' && currentRoute !== '/login' && <Link className='font-semibold text-white mx-2' to={"/bookList"}>Bookings</Link>}
        </div>
    </div>
  )
}

export default Navbar