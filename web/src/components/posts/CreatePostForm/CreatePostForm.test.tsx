import { render } from '@redwoodjs/testing/web'

import CreatePostForm from './CreatePostForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreatePostForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreatePostForm />)
    }).not.toThrow()
  })
})
