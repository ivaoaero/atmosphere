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
    icon: <Terminal />,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
    icon: {
      control: 'none',
      description: 'Default classNames: "h-4 w-4"',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default = {} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    icon: <AlertCircle />,
  },
} satisfies Story;

export const Minimal = {
  args: {
    title: 'Alert title',
    description: undefined,
    icon: undefined,
    variant: undefined,
  },
} satisfies Story;
