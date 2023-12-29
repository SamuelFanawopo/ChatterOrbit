import React from 'react'

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white py-20">
      <div className="text-center animate-fade-in-up max-w-4xl mx-auto space-y-6">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-10 leading-tight">
          Welcome to{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
            ChatterOrbit
          </span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 font-light">
          Dive into a world of seamless connectivity and engaging social
          interactions.
        </p>
        <p className="text-xl md:text-2xl mb-8">
          Join a community where every conversation is a journey, and every
          interaction is a memory.
        </p>
        <p className="text-xl md:text-2xl mb-8">
          Experience the thrill of real-time engagement in a dynamic and
          inclusive environment.
        </p>
        <h2 className="text-4xl font-bold mt-4 mb-8 animate-pulse">
          Be Part of Our Global Community
        </h2>
        <button className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Join Now
        </button>
      </div>
    </div>
  )
}

export default HeroSection
