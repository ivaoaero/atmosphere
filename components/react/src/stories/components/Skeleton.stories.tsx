import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from '@components/atoms/skeleton';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    className: 'w-[100px] h-[20px] rounded-full',
  },
  argTypes: {
    className: {
      description: 'Additional class names for the skeleton to form the shape.',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default = {
  args: {},
} satisfies Story;

export const Circle = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
} satisfies Story;

export const Card = {
  args: {
    className: 'h-[125px] w-[250px] rounded-xl',
  },
} satisfies Story;
