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

import EmailVerification from './EmailVerification'

const meta: Meta<typeof EmailVerification> = {
  component: EmailVerification,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof EmailVerification>

export const Primary: Story = {}
