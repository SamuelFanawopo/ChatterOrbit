import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SearchResultsPage = () => {
  return (
    <>
      <Metadata title="SearchResults" description="SearchResults page" />

      <h1>SearchResultsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SearchResultsPage/SearchResultsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>searchResults</code>, link to me with `
        <Link to={routes.searchResults()}>SearchResults</Link>`
      </p>
    </>
  )
}

export default SearchResultsPage
