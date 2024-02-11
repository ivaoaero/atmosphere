import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@components/atoms/checkbox';

const meta = {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Uncontrolled = {} satisfies Story;
export const Controlled = {
  args: {
    checked: true,
  },
} satisfies Story;
