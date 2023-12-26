import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RegisterPage = () => {
  return (
    <>
      <Metadata title="Register" description="Register page" />

      <h1>RegisterPage</h1>
      <p>
        Find me in <code>./web/src/pages/RegisterPage/RegisterPage.tsx</code>
      </p>
      <p>
        My default route is named <code>register</code>, link to me with `
        <Link to={routes.register()}>Register</Link>`
      </p>
    </>
  )
}

export default RegisterPage
