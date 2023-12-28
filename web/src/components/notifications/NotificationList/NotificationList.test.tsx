import { render } from '@redwoodjs/testing/web'

import NotificationList from './NotificationList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationList />)
    }).not.toThrow()
  })
})
