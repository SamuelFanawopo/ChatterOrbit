import { Metadata } from '@redwoodjs/web'
import Feed from 'src/components/feed/Feed/Feed'
import Sidebar from 'src/components/layout/Sidebar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <Sidebar />
      <Feed />
    </>
  )
}

export default HomePage
