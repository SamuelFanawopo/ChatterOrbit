import { render } from '@redwoodjs/testing/web'

import PostItem from './PostItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PostItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostItem />)
    }).not.toThrow()
  })
})
