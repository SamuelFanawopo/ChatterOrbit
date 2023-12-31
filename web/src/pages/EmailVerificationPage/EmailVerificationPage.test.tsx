import { render } from '@redwoodjs/testing/web'

import EmailVerificationPage from './EmailVerificationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EmailVerificationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmailVerificationPage />)
    }).not.toThrow()
  })
})
