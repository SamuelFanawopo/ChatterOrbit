import { render } from '@redwoodjs/testing/web'

import UserProfile from './UserProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfile />)
    }).not.toThrow()
  })
})
