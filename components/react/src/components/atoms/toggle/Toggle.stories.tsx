import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '@components/atoms/toggle';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle',
    size: 'default',
    variant: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Appearance variant of the toggle.',
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      name: 'Size',
      description: 'Size of the toggle.',
      control: 'inline-radio',
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      name: 'Disabled',
      description: 'Whether the toggle is disabled.',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default = {} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
  },
} satisfies Story;
