import { render } from '@redwoodjs/testing/web'

import MessageThread from './MessageThread'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MessageThread', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessageThread />)
    }).not.toThrow()
  })
})
