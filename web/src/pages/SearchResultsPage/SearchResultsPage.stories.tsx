import type { Meta, StoryObj } from '@storybook/react'

import SearchResultsPage from './SearchResultsPage'

const meta: Meta<typeof SearchResultsPage> = {
  component: SearchResultsPage,
}

export default meta

type Story = StoryObj<typeof SearchResultsPage>

export const Primary: Story = {}
