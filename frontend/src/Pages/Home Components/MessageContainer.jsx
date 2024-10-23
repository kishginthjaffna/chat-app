import React from 'react'
import Messages from './messages/Messages'
import sendImg from '../Home Components/assets/send.svg'

const MessageContainer = () => {
  const noChatSelected = true; // Change this to your actual condition for chat selection
  
  return (
    <div className="md:min-w-[400px] flex flex-col h-full shadow-lg rounded-lg bg-white">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Message Header */}
          <div className="flex items-center justify-between p-4 border-b shadow-sm">
            <span className="font-bold text-2xl">John Doe</span>
            <span className="text-green-500 text-sm">Online</span>
          </div>

          {/* Scrollable Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Messages will be displayed here */}
            <Messages />
          </div>

          {/* Message Input Area */}
          <div className="p-4 border-t flex items-center relative">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="input input-bordered w-full rounded-full px-4 py-2 bg-tertiary"
            />
            <button 
              className="btn btn-circle bg-primary border-none flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <img src={sendImg} alt="send" />
            </button>
          </div>
        </>
      )}
    </div>
  )
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full text-gray-500">
      <p className="text-lg">Welcome! Select a chat to start messaging. 🙂</p>
    </div>
  )
}

export default MessageContainer
