import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@components/atoms/button';
import { Navbar } from '@components/molecules/navbar';

const meta = {
  title: 'Navigation/Navbar',
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
    logoVariant: {
      control: 'select',
      options: [undefined, 'icon-only'],
      description:
        'Logo variant: undefined for responsive (icon on mobile, full logo on desktop), or "icon-only" to always show only the icon',
      table: {
        type: {
          summary: "'icon-only' | undefined",
        },
        defaultValue: {
          summary: 'undefined (responsive)',
        },
      },
    },
    diagonalDivider: {
      control: 'boolean',
      description: 'Use diagonal divider instead of straight',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
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

export const IconOnly = {
  args: {
    logoVariant: 'icon-only',
  },
} satisfies Story;

export const WithDiagonalDivider = {
  args: {
    diagonalDivider: true,
  },
} satisfies Story;

export const IconOnlyWithDiagonalDivider = {
  args: {
    logoVariant: 'icon-only',
    diagonalDivider: true,
  },
} satisfies Story;

export const WithChildrenAndDiagonalDivider = {
  args: {
    children: <Button>Button</Button>,
    diagonalDivider: true,
  },
} satisfies Story;
