import React from 'react'

const Hotels = () => {
  return (
    <div>
        <div className='bg-white flex justify-center items-center rounded-lg p-2'>
            <img className='w-32' src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hotel-img" />
            <div className='flex flex-col mx-4'>
            <h1 className='text-2xl font-bold'>Hotel Name</h1>
            <h1 className='font-bold'>Hotel Name</h1>
            </div>
            <div className='flex flex-col'>
                <button className='bg-amber-700 rounded-lg px-2 py-1 text-white font-bold my-2'>Book</button>
                <button className='bg-amber-700 rounded-lg px-2 py-1 text-white font-bold my-2'>Book</button>
            </div>
        </div>
    </div>
  )
}

export default Hotels