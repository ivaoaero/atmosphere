import { action } from '@storybook/addon-actions';
import { Check } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';

const meta = {
  title: 'General/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    size: 'md',
    variant: 'primary',
    disabled: false,
    onClick: action('clicked'),
  },
  argTypes: {
    children: {
      description: 'Content of the button.',
      control: 'text',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    variant: {
      description: 'Appearance variant of the button.',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
      ],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      description: 'Size of the button.',
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    disabled: {
      description: 'Whether the button is disabled.',
      control: 'boolean',
    },
    asChild: {
      control: false,
      description:
        'Apply all the button styles to a child element. Useful to avoid "Button in Button" situations',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  name: 'Primary',
  args: {
    variant: 'primary',
  },
} satisfies Story;

export const PrimaryAsChild = {
  name: 'Primary as Child',
  args: {
    variant: 'primary',
    size: 'md',
    asChild: true,
    children: (
      <a href="https://ivao.aero" rel="noreferrer" target="_blank">
        Go to IVAO Website
      </a>
    ),
  },
} satisfies Story;

export const Secondary = {
  args: {
    variant: 'secondary',
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: 'ghost',
  },
} satisfies Story;

export const Link = {
  args: {
    variant: 'link',
  },
} satisfies Story;

export const Icon = {
  args: {
    size: 'icon',
    children: <Check />,
  },
} satisfies Story;
