import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '@components/atoms/separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      description: 'Orientation of the separator.',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    decorative: {
      description: 'Whether the separator is decorative or not.',
      type: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default = {} satisfies Story;
