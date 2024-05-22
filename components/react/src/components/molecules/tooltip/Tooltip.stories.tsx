import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { TooltipProvider } from '@components/atoms/tooltip';
import { Tooltip } from '@components/molecules/tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: (Story) => (
    <TooltipProvider>
      <Story />
    </TooltipProvider>
  ),
  tags: ['autodocs'],
  args: {
    children: 'Hover me',
    content: 'Tooltip content',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default = {} satisfies Story;

export const CustomComponents = {
  args: {
    children: <Button>Hover me</Button>,
    content: <u>Tooltip content</u>,
  },
} satisfies Story;
