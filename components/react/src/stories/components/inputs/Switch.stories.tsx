import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@components/atoms/switch';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    onCheckedChange: action('checked change'),
  },
  argTypes: {
    checked: {
      type: 'boolean',
      description:
        'Toggles the checked state. Cannot be used with `defaultChecked`!',
      if: {
        arg: 'defaultChecked',
        exists: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail:
            'If both `checked` and `defaultChecked` are not set, the Switch wont be switched on.',
        },
      },
    },
    defaultChecked: {
      type: 'boolean',
      description:
        'Sets the initial checked state. Cannot be used with `checked`!',
      if: {
        arg: 'checked',
        exists: false,
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail:
            'If both `defaultChecked` and `checked` are not set, the Switch wont be switched on.',
        },
      },
    },
    required: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = {} satisfies Story;
