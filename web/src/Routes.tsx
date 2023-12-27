import { Router, Route } from '@redwoodjs/router'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'
import FeedPage from './pages/FeedPage/FeedPage'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/"
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
      <Route
        path="/login"
        page={() => (
          <MainLayout>
            <LoginPage />
          </MainLayout>
        )}
        name="login"
      />
      <Route
        path="/register"
        page={() => (
          <MainLayout>
            <RegisterPage />
          </MainLayout>
        )}
        name="register"
      />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
