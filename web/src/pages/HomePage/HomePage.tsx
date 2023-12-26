import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import '../../index.css'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1 className="bg-red-600">HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
