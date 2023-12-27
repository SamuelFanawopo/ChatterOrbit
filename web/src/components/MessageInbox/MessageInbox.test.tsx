import { render } from '@redwoodjs/testing/web'

import MessageInbox from './MessageInbox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessageInbox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageInbox />)
    }).not.toThrow()
  })
})
