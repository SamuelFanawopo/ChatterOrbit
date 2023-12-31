import React from 'react'
import { Link } from '@redwoodjs/router'

const EmailVerification: React.FC = () => {
  // Logic to handle the verification process would go here

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-pink-100 to-green-100">
      <div className="w-full max-w-md px-8 py-10 bg-white bg-opacity-90 shadow-xl rounded-xl border border-gray-200 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Email Verified
        </h2>
        <p className="text-md text-gray-600 mb-6">
          Thank you! Your email has been successfully verified.
        </p>
        <Link to="/home" className="text-blue-600 hover:underline">
          Go to your Dashboard
        </Link>
      </div>
    </div>
  )
}

export default EmailVerification
