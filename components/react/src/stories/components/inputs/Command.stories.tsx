import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Command } from '@components/molecules/command';

const meta = {
  title: 'Forms/Command',
  component: Command,
  tags: ['autodocs'],
  args: {
    placeholder: 'Command placeholder',
    emptyResult: 'No results',
    groups: [
      {
        key: '1',
        heading: 'Group 1',
        items: [
          {
            key: '1',
            value: 'Item 1',
          },
          {
            key: '2',
            value: 'Item 2',
          },
        ],
      },
      {
        key: '2',
        heading: 'Group 2',
        items: [
          {
            key: '3',
            value: 'Item 3',
          },
          {
            key: '4',
            value: 'Item 4',
          },
        ],
      },
    ],
    onValueChange: action('value change'),
  },
  argTypes: {
    inputProps: {
      table: {
        type: {
          summary: 'ComponentPropsWithoutRef<typeof CommandInput>',
        },
      },
    },
    value: {
      type: 'string',
      description: 'Controls the value. Cannot be used with `defaultValue`!',
      if: {
        arg: 'defaultValue',
        exists: false,
      },
    },
    defaultValue: {
      type: 'string',
      description: 'Sets the initial value. Cannot be used with `value`!',
      if: {
        arg: 'value',
        exists: false,
      },
    },
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

export const Default = {} satisfies Story;

export const Loading = {
  args: {
    isLoading: true,
    loadingNode: 'Loading...',
    groups: [],
  },
} satisfies Story;
