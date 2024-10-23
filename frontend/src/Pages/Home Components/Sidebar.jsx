import React from 'react'
import searchImg from '../Home Components/assets/search.svg'
import Conversations from './sidebar/Conversations'
import logoutImg from '../Home Components/assets/logout.svg'

const Sidebar = () => {

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search functionality here
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-lg w-full max-w-sm">

      {/* Search bar */}
      <div className="p-4 sticky top-0 bg-white z-10">
        <form className="flex items-center mb-4" onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            placeholder="Search..." 
            className="input input-bordered w-full rounded-full mr-2 px-4 py-2 bg-tertiary"
          />
          <button 
            type="submit" 
            className="btn btn-circle bg-primary border-none flex items-center justify-center"
            aria-label="Search"
          >
            <img src={searchImg} alt="search" />
          </button>
        </form>
      </div>

      {/* Conversations list */}
      <div className="flex-1 overflow-y-auto p-4">
        <Conversations />
      </div>

      {/* Logout button */}
      <div className="p-4">
        <button 
          type="submit" 
          className="btn btn-circle bg-primary border-none justify-center hover:bg-red-600 transition duration-200 w-full"
          aria-label="Logout"
        >
          <img src={logoutImg} alt="logout" />
        </button>
      </div>

    </div>
  )
}

export default Sidebar
