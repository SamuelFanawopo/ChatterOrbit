import { render } from '@redwoodjs/testing/web'

import PasswordResetForm from './PasswordResetForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordResetForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordResetForm />)
    }).not.toThrow()
  })
})
