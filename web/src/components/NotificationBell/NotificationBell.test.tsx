import { render } from '@redwoodjs/testing/web'

import NotificationBell from './NotificationBell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationBell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationBell />)
    }).not.toThrow()
  })
})
