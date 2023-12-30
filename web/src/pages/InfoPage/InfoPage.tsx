import { useRef } from 'react'
import HeroSection from 'src/components/layout/HeroSection/HeroSection'
import Footer from 'src/components/layout/Footer/Footer'
import LoginForm from 'src/components/auth/LoginForm/LoginForm'
import { Metadata } from '@redwoodjs/web'

const InfoPage = () => {
  const loginFormRef = useRef<HTMLDivElement>(null)

  const scrollToLoginForm = () => {
    loginFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Metadata title="Info" description="Info page" />
      <HeroSection onJoinNowClick={scrollToLoginForm} />
      <div ref={loginFormRef}>
        <LoginForm />
      </div>
      <Footer />{' '}
    </>
  )
}

export default InfoPage
