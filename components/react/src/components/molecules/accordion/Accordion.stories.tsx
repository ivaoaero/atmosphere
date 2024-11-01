import type { Meta, StoryObj } from '@storybook/react';

import { Accordion } from '@components/molecules/accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    type: {
      name: 'Type',
      description: 'Type of the accordion.',
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
  args: {
    type: 'single',
    collapsible: true,
    items: [
      {
        value: '1',
        trigger: 'Accordion Trigger 1',
        children: 'Accordion Content 1',
      },
      {
        value: '2',
        trigger: 'Accordion Trigger 2',
        children: 'Accordion Content 2',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default = {} satisfies Story;

export const NotCollapsible = {
  args: {
    collapsible: false,
  },
} satisfies Story;

export const Multiple = {
  args: {
    type: 'multiple',
  },
} satisfies Story;

export const DefaultOpen = {
  args: {
    defaultValue: '2',
  },
} satisfies Story;
