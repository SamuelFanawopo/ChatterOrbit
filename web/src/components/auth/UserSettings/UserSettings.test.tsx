import { render } from '@redwoodjs/testing/web'

import UserSettings from './UserSettings'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserSettings', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserSettings />)
    }).not.toThrow()
  })
})
