import type { Meta, StoryObj } from '@storybook/react'

import InfoPage from './InfoPage'

const meta: Meta<typeof InfoPage> = {
  component: InfoPage,
}

export default meta

type Story = StoryObj<typeof InfoPage>

export const Primary: Story = {}
