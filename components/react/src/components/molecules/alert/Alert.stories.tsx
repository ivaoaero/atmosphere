import { AlertCircle, Terminal } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '@components/molecules/alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Alert title',
    description: 'Alert description',
    variant: 'default',
    icon: <Terminal className="h-4 w-4" />,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default = {} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    icon: <AlertCircle className="h-4 w-4" />,
  },
} satisfies Story;
