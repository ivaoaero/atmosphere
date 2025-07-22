import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@components/atoms/calendar';

const meta = {
  title: 'Forms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    showOutsideDays: {
      description:
        'See the `react-day-picker` for mor information on how to use this component. It is a visual wrapper around the `react-day-picker` component.',
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default = {} satisfies Story;
