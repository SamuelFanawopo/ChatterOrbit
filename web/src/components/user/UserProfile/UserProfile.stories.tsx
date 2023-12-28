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

import UserProfile from './UserProfile'

const meta: Meta<typeof UserProfile> = {
  component: UserProfile,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserProfile>

export const Primary: Story = {}
