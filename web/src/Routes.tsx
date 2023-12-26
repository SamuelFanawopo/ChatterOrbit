// src/Routes.js

import { Router, Route } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <MainLayout>
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/search-results" page={SearchResultsPage} name="searchResults" />
        <Route path="/post-details" page={PostDetailsPage} name="postDetails" />
        <Route path="/feed" page={FeedPage} name="feed" />
        <Route path="/profile" page={ProfilePage} name="profile" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/register" page={RegisterPage} name="register" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </MainLayout>
    </Router>
  )
}

export default Routes
