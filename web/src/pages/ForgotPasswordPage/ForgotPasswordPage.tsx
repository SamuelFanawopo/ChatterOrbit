import { Metadata } from '@redwoodjs/web'
import PasswordResetForm from 'src/components/auth/PasswordResetForm/PasswordResetForm'
import Footer from 'src/components/layout/Footer/Footer'

const ForgotPasswordPage = () => {
  return (
    <>
      <Metadata title="ForgotPassword" description="ForgotPassword page" />
      <PasswordResetForm />
      <Footer />
    </>
  )
}

export default ForgotPasswordPage
