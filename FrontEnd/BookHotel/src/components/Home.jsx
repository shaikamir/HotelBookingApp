import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center p-6 w-5/12'>
        <h1 className='text-5xl text-white italic font-bold'>Book your stay</h1>
        <Link className='mt-4' to={"/hotels"}><button className='bg-amber-700 rounded-lg py-1 px-3 text-white font-bold'>Book</button></Link>
    </div>
  )
}

export default Home