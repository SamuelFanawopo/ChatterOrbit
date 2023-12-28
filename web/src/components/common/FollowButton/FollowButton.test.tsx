import { render } from '@redwoodjs/testing/web'

import FollowButton from './FollowButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FollowButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowButton />)
    }).not.toThrow()
  })
})
