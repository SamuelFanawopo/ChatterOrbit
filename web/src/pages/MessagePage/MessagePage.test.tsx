import { render } from '@redwoodjs/testing/web'

import MessagePage from './MessagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MessagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MessagePage />)
    }).not.toThrow()
  })
})
