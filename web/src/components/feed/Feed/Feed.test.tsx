import { render } from '@redwoodjs/testing/web'

import Feed from './Feed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Feed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Feed />)
    }).not.toThrow()
  })
})
