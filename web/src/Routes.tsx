import { Router, Route } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import MessagePage from './pages/MessagePage/MessagePage'
import InfoPage from './pages/InfoPage/InfoPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import FeedPage from './pages/FeedPage/FeedPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/reset" page={ForgotPasswordPage} name="forgotPassword" />
      <MainLayout>
        <Route path="/message" page={MessagePage} name="message" />
      </MainLayout>
      <Route path="/" page={InfoPage} name="Welcome" />
      <Route
        path="/home"
        page={() => (
          <MainLayout>
            <HomePage />
          </MainLayout>
        )}
        name="home"
      />
      <Route
        path="/settings"
        page={() => (
          <MainLayout>
            <SettingsPage />
          </MainLayout>
        )}
        name="settings"
      />
      <Route
        path="/search-results"
        page={() => (
          <MainLayout>
            <SearchResultsPage />
          </MainLayout>
        )}
        name="searchResults"
      />
      <Route
        path="/post-details"
        page={() => (
          <MainLayout>
            <PostDetailsPage />
          </MainLayout>
        )}
        name="postDetails"
      />
      <Route
        path="/feed"
        page={() => (
          <MainLayout>
            <FeedPage />
          </MainLayout>
        )}
        name="feed"
      />
      <Route
        path="/profile"
        page={() => (
          <MainLayout>
            <ProfilePage />
          </MainLayout>
        )}
        name="profile"
      />
      <Route path="/register" page={() => <RegisterPage />} name="register" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
