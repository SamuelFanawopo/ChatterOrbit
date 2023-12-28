import { render } from '@redwoodjs/testing/web'

import ConfirmDialog from './ConfirmDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmDialog />)
    }).not.toThrow()
  })
})
