import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='bg-rose-200 p-6 w-5/12 rounded-lg flex flex-col'>
    <div className=''>
      <label class="block text-gray-700 text-sm font-bold mb-1" for="username">Email Id</label>
      <input class="rounded py-1 px-1 text-gray-700 w-10/12 mb-2" id="username" type="emial"/>

      <label class="block text-gray-700 text-sm font-bold mb-1" for="password">Password</label>
      <input class="rounded py-1 px-1 text-gray-700 w-10/12 mb-2" id="password" type="password"/>

    </div>
      <button className='bg-amber-700 rounded-lg font-semibold text-white px-2 py-1 mt-2 w-24'>Login</button>
      <Link className='text-gray-700 mt-2' to={'/'}>Not yet registered <a className='underline'>Click here</a></Link>
      </div>
  )
}

export default Login