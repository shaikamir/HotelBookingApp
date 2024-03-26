import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios';


const Register = () => {
  const [error, setError] = useState("");
  // const [formData, setFormData] = useState({});
  const [res, setRes] = useState("");

  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneNoRef = useRef(null);
  const emailRef = useRef(null);
  const pswdRef = useRef(null)


  let register = async () => {
    console.log("clicked on register")
    let formData = ({name: nameRef.current.value, address: addressRef.current.value, phoneNo: phoneNoRef.current.value, email: emailRef.current.value, password: pswdRef.current.value})
    
    console.log("formDataaaa", formData)
    if (!formData.name || !formData.address || !formData.phoneNo || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }
    
    else {
      const servicecall = await axios.post('http://localhost:3200/register', formData);
    setError("")
    setRes(servicecall.data.message)
    console.log("after rgister", formData.name);
    }
  }

  return (
    <div className='bg-rose-200 p-6 w-5/12 rounded-lg flex flex-col'>
      {error!='' && <h1 className=' text-red-600 p-2 font-bold text-2xl'>{error}</h1>}
      {res!='' && <h1 className='bg-amber-700 text-center text-white p-2 font-bold text-2xl'>{res}</h1>}
    <div className=''>
      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">Name</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={nameRef} id="username" type="text"/>
      {/* {formData.name == null && error && <h2 className='text-red-600'>Please enter your name</h2>} */}

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="address">Address</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={addressRef} id="address" type="text"/>
      {/* {formData.address == null && error && <h2 className='text-red-600'>Please enter your adress</h2>} */}

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="phoneNumber">Phone Number</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={phoneNoRef} id="phoneNumber" type="text"/>
      {/* {formData.phoneNo == null && error && <h2 className='text-red-600'>Please enter phone number</h2>} */}

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="emailId">Email Id</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={emailRef} id="emailId" type="emial"/>
      {/* {formData.email == null && error && <h2 className='text-red-600'>Please enter email</h2>} */}

      <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="pswrd">Password</label>
      <input className="rounded py-1 px-1 text-gray-700 w-11/12 mb-2" ref={pswdRef} id="pswrd" type="password"/>
      {/* {formData.password == null && error && <h2 className='text-red-600'>Please enter password</h2>} */}
    </div>
      <button className='bg-amber-700 rounded-lg font-semibold text-white px-2 py-1 mt-2 w-24' onClick={register}>Register</button>
      <Link className='text-gray-700 mt-2' to={'/login'}>Already have an account <a className='underline'>Click here</a></Link>
      </div>
  )
}

export default Register