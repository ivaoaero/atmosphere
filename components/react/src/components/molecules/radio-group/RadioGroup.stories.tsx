import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '@components/molecules/radio-group';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    defaultValue: 'option-one',
    items: [
      { value: 'option-one', label: 'Option one' },
      { value: 'option-two', label: 'Option two' },
      { value: 'option-three', label: 'Option three' },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default = {} satisfies Story;
