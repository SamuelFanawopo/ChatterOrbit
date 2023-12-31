import { Link } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import SignUpForm from 'src/components/auth/SignUpForm/SignUpForm'
import Footer from 'src/components/layout/Footer/Footer'

const RegisterPage = () => {
  return (
    <>
      <Metadata title="Register" description="Register page" />
      <SignUpForm />
      <Footer />
    </>
  )
}

export default RegisterPage
