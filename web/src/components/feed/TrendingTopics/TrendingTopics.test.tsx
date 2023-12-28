import { render } from '@redwoodjs/testing/web'

import TrendingTopics from './TrendingTopics'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TrendingTopics', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrendingTopics />)
    }).not.toThrow()
  })
})
