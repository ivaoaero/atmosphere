import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Appearance variant of the button.',
      control: 'select',
      options: ['primary', 'secondary', 'info', 'danger', 'muted'],
    },
    size: {
      name: 'Size',
      description: 'Size of the button.',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    text: {
      name: 'Text',
      description: 'Text content of the button.',
      type: 'string',
      control: 'text',
    },
    icon: {
      name: 'Icon',
      description: 'Optional element as icon for the button.',
    },
    isFullWidth: {
      name: 'Full width',
      description:
        "Controls whether the button has the full width of it's parent",
      type: 'boolean',
    },
  },
  args: {
    text: 'Button Text',
    size: 'md',
    variant: 'primary',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    variant: 'primary',
    size: 'md',
  },
} satisfies Story;
