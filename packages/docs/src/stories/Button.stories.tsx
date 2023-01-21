import { Button } from '@ivaoaero/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Button',
  },
}

export const Secondary: StoryObj = {}
