import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { DatePicker } from '@components/molecules/date-picker';

const meta = {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    onSelect: action('select'),
  },
  argTypes: {
    initialFocus: {
      type: 'boolean',
      description:
        'See the `react-day-picker` for mor information on how to use this component. It is a visual wrapper around the `react-day-picker` component.',
    },
    onSelect: { action: 'selected' },
    selected: {
      control: { type: 'date' },
      table: {
        type: {
          summary: 'Date',
        },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default = {} satisfies Story;

export const DateSet = {
  args: {
    selected: new Date(),
  },
} satisfies Story;

export const CustomTrigger = {
  args: {
    trigger: <Button>Custom Trigger</Button>,
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
  },
} satisfies Story;
