const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-md">
          ChatterOrbit © {new Date().getFullYear()} - All Rights Reserved
        </p>
        {/* Optional: Additional footer content goes here */}
      </div>
    </footer>
  )
}

export default Footer
