import React from 'react'
import { Link } from '@redwoodjs/router'

const PasswordResetForm: React.FC = () => {
  // State and functions for form submission would go here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-green-100">
      <div className="w-full max-w-md px-8 py-10 bg-white bg-opacity-90 shadow-xl rounded-xl border border-gray-200">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Password Reset
          </h2>
          <p className="text-md text-center text-gray-600">
            Enter your email to reset your password.
          </p>
        </div>
        <form className="space-y-6">
          <div>
            <label
              className="block text-md font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              id="email"
              type="email"
              placeholder="Your email address"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-teal-400 py-3 text-white rounded-lg font-bold hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            type="submit"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline">
            Remembered your password? Sign in.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PasswordResetForm
