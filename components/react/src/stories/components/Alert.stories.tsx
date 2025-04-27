import { AlertCircle, Check, Terminal } from 'lucide-react';

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
    Icon: Terminal,
  },
  argTypes: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    variant: {
      name: 'Variant',
      control: 'select',
      options: ['default', 'success', 'destructive'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    Icon: {
      description:
        'A component that accepts `classNames` as an attribute. The default size applied is `size-4`. Any component can be used for that, those listed here are examples from `lucide-react`.',
      options: ['Check', 'AlertCircle', 'Terminal'],
      mapping: {
        Check,
        AlertCircle,
        Terminal,
      },
      name: 'Icon',
      table: {
        type: {
          summary: 'LucideIcon',
        },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default = {} satisfies Story;

export const Success = {
  args: {
    variant: 'success',
    Icon: Check,
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    Icon: AlertCircle,
  },
} satisfies Story;

export const Minimal = {
  args: {
    title: 'Alert title',
    description: undefined,
    Icon: undefined,
    variant: undefined,
  },
} satisfies Story;
