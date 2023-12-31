import React, { useState } from 'react'
import { Link } from '@redwoodjs/router'
import SearchBar from '../SearchBar/SearchBar'
import { ChevronDownIcon, BellIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const userName = 'John Doe' // Replace with actual user data
  const userProfilePic = '../../assets/profile_icon.jpg' // Replace with actual user image path
  const defaultProfilePic = '../../assets/profile_icon.jpg' // Path to your default avatar image

  return (
    <header className="bg-gradient-to-r from-blue-100 via-pink-100 to-green-100 text-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-3xl font-bold text-blue-600">
          ChatterOrbit
        </Link>
        <SearchBar />
        <div className="flex items-center space-x-4">
          <div className="relative">
            <BellIcon className="h-6 w-6 cursor-pointer hover:text-blue-500" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={userProfilePic || defaultProfilePic}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
              />
              <span className="ml-2 mr-1 text-md">{userName}</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-gray-800 z-50 transition duration-300 ease-in-out">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
