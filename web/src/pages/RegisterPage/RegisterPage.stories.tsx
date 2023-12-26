import type { Meta, StoryObj } from '@storybook/react'

import RegisterPage from './RegisterPage'

const meta: Meta<typeof RegisterPage> = {
  component: RegisterPage,
}

export default meta

type Story = StoryObj<typeof RegisterPage>

export const Primary: Story = {}
