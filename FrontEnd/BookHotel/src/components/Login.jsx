import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let emaiLoginRef = useRef();
  let pswrdLoginRef = useRef();
  let [resMsg, setResMsg] = useState("");
  let [errMsg, setErrMsg] = useState("")
  let navigateHook = useNavigate()


  let fnLogin = async () => {
  let loginInputBody = ({email: emaiLoginRef.current.value, password: pswrdLoginRef.current.value})

    if(loginInputBody.email == '' || loginInputBody.password == ''){
      return setErrMsg("Please select all required fields")
    }

    await axios
      .post("http://localhost:3200/login", loginInputBody)
      .then((res) => {
        setResMsg(res.data.content);
        setErrMsg("")
        navigateHook('/listOfHotels')
        console.log("after logging in", res.data.content);
      })
      .catch((err) => {
        console.log(err);
        setResMsg("")
      });
  };

  return (
    <div className='bg-rose-200 p-6 w-5/12 rounded-lg flex flex-col'>
      {resMsg!='' && <h1 className='bg-blue-500 text-center text-white p-2 font-bold text-2xl'>{resMsg}</h1>}
      {errMsg!='' && <h1 className='text-center text-red-500 p-2 font-bold text-2xl'>{errMsg}</h1>}
    <div className=''>
      <label class="block text-gray-700 text-sm font-bold mb-1" for="username">Email Id</label>
      <input class="rounded py-1 px-1 text-gray-700 w-10/12 mb-2" id="username" ref={emaiLoginRef} type="emial"/>

      <label class="block text-gray-700 text-sm font-bold mb-1" for="password">Password</label>
      <input class="rounded py-1 px-1 text-gray-700 w-10/12 mb-2" id="password" ref={pswrdLoginRef} type="password"/>

    </div>
      <button className='bg-amber-700 rounded-lg font-semibold text-white px-2 py-1 mt-2 w-24' onClick={fnLogin}>Login</button>
      <Link className='text-gray-700 mt-2' to={'/'}>Not yet registered <a className='underline'>Click here</a></Link>
      </div>
  )
}

export default Login