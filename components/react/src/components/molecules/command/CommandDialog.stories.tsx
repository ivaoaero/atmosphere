import type { Meta, StoryObj } from '@storybook/react';

import { CommandDialog } from '@components/molecules/command';

const meta = {
  title: 'Components/CommandDialog',
  component: CommandDialog,
  tags: ['autodocs'],
  args: {
    defaultOpen: true,
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
} satisfies Meta<typeof CommandDialog>;

export default meta;
type Story = StoryObj<typeof CommandDialog>;

export const Default = {} satisfies Story;
