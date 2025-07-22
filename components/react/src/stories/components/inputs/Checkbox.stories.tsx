import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@components/atoms/checkbox';
import { Label } from '@components/atoms/label';

const meta = {
  title: 'Forms/Inputs/Checkbox',
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Uncontrolled = {} satisfies Story;
export const Controlled = {
  args: {
    checked: true,
  },
} satisfies Story;

export const WithLabel = {
  decorators: (Story, { args: { id } }) => (
    <div className={'flex items-center gap-x-2'}>
      <Story />
      <Label htmlFor={id}>Test</Label>
    </div>
  ),
  args: { id: 'test' },
} satisfies Story;
