import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const LoginPage = () => {
  return (
    <>
      <Metadata title="Login" description="Login page" />

      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.tsx</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
    </>
  )
}

export default LoginPage
