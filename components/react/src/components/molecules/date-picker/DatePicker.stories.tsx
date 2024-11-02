import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { DatePicker } from '@components/molecules/date-picker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
    selected: { control: { type: 'date' } },
  },
  args: {
    onSelect: console.log,
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
