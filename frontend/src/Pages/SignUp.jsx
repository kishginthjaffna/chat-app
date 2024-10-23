import React from 'react'

function SignUp() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4'>
        <h1 className='text-4xl font-bold text-center text-primary mb-6'>Sign Up</h1>
        
        <div className='mb-4'>
          <label htmlFor='fullname' className='block text-gray-700 mb-2'>Full Name:</label>
          <input 
            type='text' 
            id='fullname' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter your full name'
          />
        </div>
        
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-700 mb-2'>Username:</label>
          <input 
            type='text' 
            id='username' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter a username'
          />
        </div>

        <div className='mb-7 mt-7'>
          <span className='text-gray-700 mr-5'>Gender:</span>
          <input type='radio' id='male' name='gender' value='male' />
          <label htmlFor='male' className=' text-gray-700 mb-2 ml-2'>Male</label>
          <input type='radio' id='female' name='gender' value='female' className='ml-5' />
          <label htmlFor='female' className=' text-gray-700 mb-2 ml-2'>Female</label>
        </div>

        <div className='mb-4'>
          <label htmlFor='password' className='block text-gray-700 mb-2'>Password:</label>
          <input 
            type='text' 
            id='password' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter a password'
          />
        </div>

        <div className='mb-4'>
          <label htmlFor='confirm-password' className='block text-gray-700 mb-2'>Confirm Password:</label>
          <input 
            type='password' 
            id='confirm-password' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter the password again'
          />
        </div>

        <div></div>

        <button className='w-full py-3 mt-10 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition duration-300 ease-in-out'>
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp
