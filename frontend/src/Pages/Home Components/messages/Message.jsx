import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img
                alt=''
                src=''
            />
        </div>
      </div>
      <div className={'chat-bubble text-white bg-primary'}>HI! What's up?</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:30</div>
    </div>
  )
}

export default Message
