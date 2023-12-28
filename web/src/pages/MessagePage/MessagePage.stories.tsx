import type { Meta, StoryObj } from '@storybook/react'

import MessagePage from './MessagePage'

const meta: Meta<typeof MessagePage> = {
  component: MessagePage,
}

export default meta

type Story = StoryObj<typeof MessagePage>

export const Primary: Story = {}
