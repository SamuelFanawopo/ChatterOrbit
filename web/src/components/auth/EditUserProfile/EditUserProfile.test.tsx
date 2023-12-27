import { render } from '@redwoodjs/testing/web'

import EditUserProfile from './EditUserProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditUserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserProfile />)
    }).not.toThrow()
  })
})
