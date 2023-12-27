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

import EditUserProfile from './EditUserProfile'

const meta: Meta<typeof EditUserProfile> = {
  component: EditUserProfile,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EditUserProfile>

export const Primary: Story = {}
