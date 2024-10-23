import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4'>
        <h1 className='text-4xl font-bold text-center text-primary mb-6'>Log In</h1>
        
        <div className='mb-4'>
          <label htmlFor='username' className='block text-gray-700 mb-2'>Username:</label>
          <input 
            type='text' 
            id='username' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter your username'
          />
        </div>
        
        <div className='mb-6'>
          <label htmlFor='password' className='block text-gray-700 mb-2'>Password:</label>
          <input 
            type='password' 
            id='password' 
            className='w-full input input-bordered h-10' 
            placeholder='Enter your password'
          />
        </div>

        <button className='w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition duration-300 ease-in-out'>
          Log In
        </button>

        <p className='mt-6 text-center text-gray-500'>
          Don't have an account? <a href='/' className='text-primary hover:underline'>Sign Up!</a>
        </p>
      </div>
    </div>
  )
}

export default Login
