import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button/index';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Send',
    size: 'md',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      name: 'Variant',
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
    },
    size: {
      name: 'Size',
      description: 'Size of the button.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    disabled: {
      name: 'Disabled',
      description: 'Whether the button is disabled.',
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary = {
  name: 'Primary',
  args: {
    variant: 'primary',
    size: 'md',
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
    size: 'md',
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
    size: 'md',
  },
} satisfies Story;

export const Destructive = {
  args: {
    variant: 'destructive',
    size: 'md',
  },
} satisfies Story;

export const Ghost = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
} satisfies Story;

export const Link = {
  args: {
    variant: 'link',
    size: 'md',
  },
} satisfies Story;
