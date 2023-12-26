import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PostDetailsPage = () => {
  return (
    <>
      <Metadata title="PostDetails" description="PostDetails page" />

      <h1>PostDetailsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PostDetailsPage/PostDetailsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>postDetails</code>, link to me with `
        <Link to={routes.postDetails()}>PostDetails</Link>`
      </p>
    </>
  )
}

export default PostDetailsPage
