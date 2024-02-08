import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@components/atoms/input/index';

const meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
    type: 'text',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Whether the input is disabled.',
      control: 'boolean',
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Placeholder text.',
      control: 'text',
    },
    type: {
      name: 'Type',
      description: 'Type of Input.',
      control: 'select',
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    type: 'text',
    disabled: false,
  },
} satisfies Story;
