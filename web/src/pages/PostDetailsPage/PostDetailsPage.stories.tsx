import type { Meta, StoryObj } from '@storybook/react'

import PostDetailsPage from './PostDetailsPage'

const meta: Meta<typeof PostDetailsPage> = {
  component: PostDetailsPage,
}

export default meta

type Story = StoryObj<typeof PostDetailsPage>

export const Primary: Story = {}
