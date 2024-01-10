import { Metadata } from '@redwoodjs/web'
import Feed from 'src/components/feed/Feed/Feed'
import Sidebar from 'src/components/layout/Sidebar'
import UserSuggestions from 'src/components/feed/UserSuggestions/UserSuggestions'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="flex min-h-screen">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <Feed />
        </div>
        <div className="w-64">
          <UserSuggestions />
        </div>
      </div>
    </>
  )
}

export default HomePage
