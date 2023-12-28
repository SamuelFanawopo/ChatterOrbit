// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Feed from './Feed'

const meta: Meta<typeof Feed> = {
  component: Feed,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Feed>

export const Primary: Story = {}
