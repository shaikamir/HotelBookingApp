import React from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'


const Register = () => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneNoRef = useRef();
  const emailRef = useRef();
  const pswdRef = useRef()

  let register = () => {
    console.log("Registered successfully")
  }

  return (
    <div className='bg-rose-200 p-6 w-5/12 rounded-lg flex flex-col'>
    <div className=''>
      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">Name</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={nameRef} id="username" type="text"/>

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="address">Address</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={addressRef} id="address" type="text"/>

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phoneNumber">Phone Number</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={phoneNoRef} id="phoneNumber" type="text"/>

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="emailId">Email Id</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={emailRef} id="emailId" type="emial"/>

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="pswrd">Password</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={pswdRef} id="pswrd" type="password"/>
    </div>
      <button className='bg-amber-700 rounded-lg font-semibold text-white px-2 py-1 mt-2 w-24' onClick={register}>Register</button>
      <Link className='text-gray-700 mt-2' to={'/login'}>Already have an account <a className='underline'>Click here</a></Link>
      </div>
  )
}

export default Register