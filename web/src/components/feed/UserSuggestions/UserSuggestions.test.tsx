import { render } from '@redwoodjs/testing/web'

import UserSuggestions from './UserSuggestions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserSuggestions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSuggestions />)
    }).not.toThrow()
  })
})
