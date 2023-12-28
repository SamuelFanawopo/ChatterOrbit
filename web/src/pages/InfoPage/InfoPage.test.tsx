import { render } from '@redwoodjs/testing/web'

import InfoPage from './InfoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InfoPage />)
    }).not.toThrow()
  })
})
