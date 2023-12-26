import { render } from '@redwoodjs/testing/web'

import Follow from './Follow'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Follow', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Follow />)
    }).not.toThrow()
  })
})
