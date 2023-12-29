import HeroSection from 'src/components/layout/HeroSection/HeroSection'
import LoginForm from 'src/components/auth/LoginForm/LoginForm'
import { Metadata } from '@redwoodjs/web'

const InfoPage = () => {
  return (
    <>
      <Metadata title="Info" description="Info page" />
      <HeroSection />
      <LoginForm />

      {/* <Footer /> */}

      <div className="flex flex-col items-center text-l justify-center bg-gradient-to-r from-blue-500 to-teal-400 text-white py-4">
        <footer className="flex flex-col">
          <p className="mt-5 mb-4 flex justify-center">
            ChatterOrbit © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  )
}

export default InfoPage
