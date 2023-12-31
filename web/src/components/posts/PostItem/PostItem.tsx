import React from 'react'
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import postImage from '../../../assets/image.jpeg' // Adjust the path as needed

const PostItem: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl">
      <div className="p-4">
        <h5 className="font-bold text-xl mb-2">Post Title</h5>
        <p className="text-gray-700 text-sm">
          This is a sample post description. It's more about the post...
        </p>
      </div>
      <img src={postImage} alt="Post" className="w-full h-64 object-cover" />{' '}
      {/* Image added here */}
      <div className="flex justify-around items-center p-4 border-t">
        <button className="flex items-center text-blue-500 hover:text-blue-600">
          <HeartIcon className="h-6 w-6 mr-1" /> Like
        </button>
        <button className="flex items-center text-blue-500 hover:text-blue-600">
          <ChatBubbleOvalLeftIcon className="h-6 w-6 mr-1" /> Comment
        </button>
        <button className="flex items-center text-blue-500 hover:text-blue-600">
          <ShareIcon className="h-6 w-6 mr-1" /> Share
        </button>
      </div>
    </div>
  )
}

export default PostItem
