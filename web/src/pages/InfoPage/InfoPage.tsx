import HeroSection from 'src/components/layout/HeroSection/HeroSection'
import LoginForm from 'src/components/auth/LoginForm/LoginForm'
import { Metadata } from '@redwoodjs/web'

const InfoPage = () => {
  return (
    <>
      <Metadata title="Info" description="Info page" />
      <HeroSection />
      <LoginForm />
    </>
  )
}

export default InfoPage
