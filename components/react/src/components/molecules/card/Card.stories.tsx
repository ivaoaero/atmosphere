import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '@components/molecules/card';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Card Title',
    description: 'Card Description',
    content: 'Card Content',
    footer: 'Card Footer',
    className: 'w-[350px]',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default = {} satisfies Story;
