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

import UserSettings from './UserSettings'

const meta: Meta<typeof UserSettings> = {
  component: UserSettings,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof UserSettings>

export const Primary: Story = {}
