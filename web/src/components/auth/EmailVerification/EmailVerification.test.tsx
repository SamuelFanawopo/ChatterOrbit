import { render } from '@redwoodjs/testing/web'

import EmailVerification from './EmailVerification'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmailVerification', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmailVerification />)
    }).not.toThrow()
  })
})
