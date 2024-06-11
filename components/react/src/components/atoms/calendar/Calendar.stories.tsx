import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@components/atoms/calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    mode: {
      name: 'Selection Mode',
      description: 'The selection mode of the calendar.',
      control: 'select',
      options: ['single', 'multiple', 'range', 'none'],
    },
    initialFocus: {
      name: 'Initial Focus',
      description: 'The initial focus of the calendar.',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default = {} satisfies Story;

export const Focused = {} satisfies Story;
