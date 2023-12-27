import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import '../../index.css'

const HomePage = () => {
  return (
    <>
      <main className="my-5">
        <Metadata title="Home" description="Home page" />
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </main>
    </>
  )
}

export default HomePage
