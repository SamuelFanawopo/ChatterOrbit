import { render } from '@redwoodjs/testing/web'

import CommentItem from './CommentItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentItem />)
    }).not.toThrow()
  })
})
