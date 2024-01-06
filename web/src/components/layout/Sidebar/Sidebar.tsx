import React from 'react'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  CameraIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  PlusCircleIcon,
  UserCircleIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline'

const Sidebar: React.FC = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-[calc(100vh - 4rem)] bg-white shadow-lg z-10 rounded-r-lg overflow-y-auto">
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-2 mt-4">
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <HomeIcon className="h-6 w-6" />
            <span className="font-medium">Home</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <MagnifyingGlassIcon className="h-6 w-6" />
            <span className="font-medium">Search</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <CameraIcon className="h-6 w-6" />
            <span className="font-medium">Explore</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <ChatBubbleOvalLeftIcon className="h-6 w-6" />
            <span className="font-medium">Messages</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <BellIcon className="h-6 w-6" />
            <span className="font-medium">Notifications</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <PlusCircleIcon className="h-6 w-6" />
            <span className="font-medium">Create</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <UserCircleIcon className="h-6 w-6" />
            <span className="font-medium">Profile</span>
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in-out px-4 py-2 rounded-md">
            <Bars3BottomLeftIcon className="h-6 w-6" />
            <span className="font-medium">More</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
