import React from 'react'
import {
  HomeIcon,
  CameraIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  PlusCircleIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline'

const Sidebar: React.FC = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-10 rounded-r-xl overflow-y-auto top-20">
      <div className="flex flex-col h-full">
        <nav className="px-4 py-4">
          <ul className="space-y-4 flex-grow">
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <HomeIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">Home</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <CameraIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">Explore</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <ChatBubbleOvalLeftIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">Messages</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <BellIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">Notifications</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <PlusCircleIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">Create</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ease-in-out p-3 rounded-md"
              >
                <Bars3BottomLeftIcon className="h-6 w-6 group-hover:scale-110 transform transition-transform duration-200" />
                <span className="font-semibold text-lg">More</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* Optionally, you can add a section here for logout or settings */}
      </div>
    </div>
  )
}

export default Sidebar
