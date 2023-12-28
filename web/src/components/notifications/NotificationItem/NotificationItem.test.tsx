import { render } from '@redwoodjs/testing/web'

import NotificationItem from './NotificationItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationItem />)
    }).not.toThrow()
  })
})
