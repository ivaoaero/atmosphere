import type { Meta, StoryObj } from '@storybook/react';

import { Collapsible } from '@components/molecules/collapsible';

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  args: {
    trigger: 'Collapsible Trigger',
    children: 'Collapsible Content',
    defaultOpen: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default = {} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultOpen: true,
  },
} satisfies Story;
