import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from '@components/atoms/toggle';

const meta = {
  title: 'Forms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: {
    children: 'Toggle',
    size: 'default',
    variant: 'default',
    disabled: false,
    onPressedChange: action('pressed change'),
  },
  argTypes: {
    variant: {
      description: 'Appearance variant of the toggle.',
      control: 'select',
      options: ['default', 'outline'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    size: {
      description: 'Size of the toggle.',
      control: 'inline-radio',
      options: ['default', 'sm', 'lg'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
    disabled: {
      description: 'Whether the toggle is disabled.',
      control: 'boolean',
    },
    pressed: {
      type: 'boolean',
      description:
        'Controls the pressed state. Cannot be used with `defaultPressed`!',
      if: {
        arg: 'defaultPressed',
        exists: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail:
            'If both `pressed` and `defaultPressed` are not set, the Switch wont be switched on.',
        },
      },
    },
    defaultPressed: {
      type: 'boolean',
      description:
        'Sets the initial pressed state. Cannot be used with `pressed`!',
      if: {
        arg: 'pressed',
        exists: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail:
            'If both `defaultPressed` and `pressed` are not set, the Switch wont be switched on.',
        },
      },
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default = {} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
  },
} satisfies Story;
