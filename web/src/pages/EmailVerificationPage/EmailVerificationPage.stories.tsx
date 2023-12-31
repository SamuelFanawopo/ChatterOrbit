import type { Meta, StoryObj } from '@storybook/react'

import EmailVerificationPage from './EmailVerificationPage'

const meta: Meta<typeof EmailVerificationPage> = {
  component: EmailVerificationPage,
}

export default meta

type Story = StoryObj<typeof EmailVerificationPage>

export const Primary: Story = {}
