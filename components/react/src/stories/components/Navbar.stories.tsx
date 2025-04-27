import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Navbar } from '@components/molecules/navbar';

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    title: 'Navbar Title',
  },
  argTypes: {
    children: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default = {} satisfies Story;

export const WithChildren = {
  args: {
    children: <Button>Button</Button>,
  },
} satisfies Story;
