import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '@components/molecules/radio-group';

const meta = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    items: [
      { value: 'option-one', label: 'Option one' },
      { value: 'option-two', label: 'Option two' },
      { value: 'option-three', label: 'Option three' },
    ],
    onValueChange: action('value change'),
  },
  argTypes: {
    value: {
      type: 'string',
      description:
        'The controlled value of the radio group. Cannot be used with `defaultValue`!',
      if: {
        arg: 'defaultValue',
        exists: false,
      },
    },
    defaultValue: {
      type: 'string',
      description:
        'The initial value of the radio group. Cannot be used with `value`!',
      if: {
        arg: 'value',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default = {} satisfies Story;

export const DefaultValue = {
  args: {
    defaultValue: 'option-one',
  },
} satisfies Story;
