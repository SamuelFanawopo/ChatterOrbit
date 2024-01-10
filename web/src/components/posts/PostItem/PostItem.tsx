import React, { useState } from 'react'
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import postImage from '../../../assets/image.jpeg' // Adjust the path as needed
import profileIcon from '../../../assets/profile_icon.jpg' // Adjust the path as needed

const PostItem: React.FC = () => {
  const [comment, setComment] = useState('')

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  const postComment = () => {
    console.log('Posting comment:', comment)
    // Add logic to post the comment
    setComment('') // Reset comment input after posting
  }

  return (
    <div className="mt-20 bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl max-w-lg mx-auto">
      {/* User Profile Section */}
      <div className="flex items-center p-4">
        <img
          src={profileIcon}
          alt="Profile"
          className="h-10 w-10 rounded-full mr-2 object-cover"
        />
        <div>
          <h6 className="font-bold">John Doe</h6>
          <small className="text-gray-500">Posted 1h ago</small>
        </div>
        <EllipsisHorizontalIcon className="ml-auto h-5 w-5 text-gray-600 cursor-pointer" />
      </div>
      <img src={postImage} alt="Post" className="w-full h-96 object-cover" />

      {/* Interaction Icons */}
      <div className="flex justify-between items-center px-4 py-2">
        <div className="flex space-x-4">
          <div className="group">
            <HeartIcon className="h-6 w-6 text-blue-500 cursor-pointer transition duration-150 ease-in-out hover:scale-110" />
            <span className="hidden group-hover:block absolute text-xs rounded-lg bg-black text-white py-1 px-2">
              Like
            </span>
          </div>
          <div className="group">
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-blue-500 cursor-pointer transition duration-150 ease-in-out hover:scale-110" />
            <span className="hidden group-hover:block absolute text-xs rounded-lg bg-black text-white py-1 px-2">
              Comment
            </span>
          </div>
        </div>
        <div className="group">
          <ShareIcon className="h-6 w-6 text-blue-500 cursor-pointer transition duration-150 ease-in-out hover:scale-110" />
          <span className="hidden group-hover:block absolute text-xs rounded-lg bg-black text-white py-1 px-2">
            Share
          </span>
        </div>
      </div>

      {/* Likes, Description and Comments Link */}
      <div className="px-4 pb-4">
        <p className="text-gray-800 font-semibold">23 likes</p>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">John Doe</p>
          <p className="text-gray-700 text-sm flex-1">
            This is a sample post description...
          </p>
        </div>
        <a
          href="/comments/:id"
          className="text-blue-500 text-sm cursor-pointer"
        >
          View all 13 comments
        </a>
      </div>

      {/* Add Comment Section */}
      <div className="p-4 border-t flex items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          className="border p-2 flex-1 rounded-md focus:border-blue-500 focus:outline-none"
          value={comment}
          onChange={handleCommentChange}
        />
        {comment && (
          <button
            onClick={postComment}
            className="text-blue-500 ml-2 hover:text-blue-600 cursor-pointer"
          >
            Post
          </button>
        )}
      </div>
    </div>
  )
}

export default PostItem
