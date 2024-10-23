import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='flex flex-col gap-2 py-2 overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations
