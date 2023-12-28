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

import LoadingSpinner from './LoadingSpinner'

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LoadingSpinner>

export const Primary: Story = {}
