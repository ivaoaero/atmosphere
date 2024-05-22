import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '@components/molecules/tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    defaultValue: 'tab1',
    tabs: {
      tab1: {
        trigger: 'Tab 1',
        content: 'Tab 1 content',
      },
      tab2: {
        trigger: 'Tab 2',
        content: 'Tab 2 content',
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default = {} satisfies Story;
