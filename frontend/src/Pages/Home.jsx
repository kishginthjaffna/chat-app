import React from 'react'
import Sidebar from '../Pages/Home Components/Sidebar'
import MessageContainer from '../Pages/Home Components/MessageContainer'

function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-gradient-to-r">
      
      {/* Sidebar */}
      <div className="w-full md:w-1/4 h-1/2 md:h-full p-4 bg-tertiary shadow-lg md:block hidden">
        <Sidebar />
      </div>

      {/* Message Container */}
      <div className="flex-1 h-full p-6 bg-tertiary rounded-l-lg">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
