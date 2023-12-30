import { useState } from 'react'
import { Link } from '@redwoodjs/router'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isFormFilled = email && password

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isFormFilled) return
    // Handle form submission
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="w-full max-w-md px-8 py-10 bg-white bg-opacity-90 shadow-xl rounded-lg border border-gray-300">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Member Login
          </h2>
          <p className="text-md text-center text-gray-600">
            Sign in to continue to ChatterOrbit.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              className="block text-md font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div>
            <label
              className="block text-md font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              id="password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-teal-400 py-3 text-white rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            type="submit"
            disabled={!isFormFilled}
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/register" className="text-blue-600 hover:underline">
            Don't have an account? Register here.
          </Link>
        </div>

        <div className="mt-3 text-center">
          <Link to="/reset" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
