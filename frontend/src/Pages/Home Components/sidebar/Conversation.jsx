import React from 'react'

const Conversation = ({ userName = 'John Doe', message = 'Hello', avatarUrl = '' }) => {
  return (
    <>
      <div className='flex items-center gap-2 hover:bg-secondary rounded px-10 py-3 w-80 ml-5'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src={avatarUrl || 'https://via.placeholder.com/150'} alt={userName} />
          </div>
        </div>

        <div className='flex flex-col flex-1 ml-5'>
          <h3 className='font-semibold text-xl'>{userName}</h3>
          <p className='text-sm text-gray-500'>{message}</p>
        </div>
      </div>
      <div>
        {/* Any additional content can go here */}
      </div>
    </>
  )
}

export default Conversation
