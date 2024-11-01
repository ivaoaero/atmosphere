import type { Meta, StoryObj } from '@storybook/react';

import { Command } from '@components/molecules/command';

const meta = {
  title: 'Components/Command',
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
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof Command>;

export const Default = {} satisfies Story;

export const Loading = {
  args: {
    isLoading: true,
    loadingText: 'Loading...',
    groups: [],
  },
} satisfies Story;
