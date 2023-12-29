import HeroSection from 'src/components/layout/HeroSection/HeroSection'
import LoginForm from 'src/components/auth/LoginForm/LoginForm'
import { Metadata } from '@redwoodjs/web'
import Footer from 'src/components/layout/Footer/Footer'

const InfoPage = () => {
  return (
    <>
      <Metadata title="Info" description="Info page" />
      <HeroSection />
      <LoginForm />
      <Footer />
    </>
  )
}

export default InfoPage
