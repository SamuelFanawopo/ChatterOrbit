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

import SendMessageForm from './SendMessageForm'

const meta: Meta<typeof SendMessageForm> = {
  component: SendMessageForm,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SendMessageForm>

export const Primary: Story = {}
