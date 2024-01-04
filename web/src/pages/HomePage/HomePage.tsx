import { Metadata } from '@redwoodjs/web'
import Feed from 'src/components/feed/Feed/Feed'

const HomePage = () => {
  return (
    <>
      <main className="my-5">
        <Metadata title="Home" description="Home page" />
        <Feed />
      </main>
    </>
  )
}

export default HomePage
