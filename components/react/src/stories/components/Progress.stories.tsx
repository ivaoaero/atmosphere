import type { Meta, StoryObj } from '@storybook/react';

import { Progress } from '@components/atoms/progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  args: {
    value: 33,
  },
  argTypes: {
    max: {
      type: 'number',
    },
    getValueLabel: {
      type: 'function',
      description: 'A function that returns a label for the value.',
      table: {
        type: {
          summary: '(value: number, max: number) => string}',
        },
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default = {} satisfies Story;

export const CustomScale = {
  args: {
    value: 2,
    max: 7,
  },
} satisfies Story;
