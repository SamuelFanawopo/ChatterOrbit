import { render } from '@redwoodjs/testing/web'

import SendMessageForm from './SendMessageForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SendMessageForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SendMessageForm />)
    }).not.toThrow()
  })
})
