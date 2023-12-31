import { Metadata } from '@redwoodjs/web'
import EmailVerification from 'src/components/auth/EmailVerification/EmailVerification'
import Footer from 'src/components/layout/Footer/Footer'

const EmailVerificationPage = () => {
  return (
    <>
      <Metadata title="Verified" description="EmailVerification page" />
      <EmailVerification />
      <Footer />
    </>
  )
}

export default EmailVerificationPage
