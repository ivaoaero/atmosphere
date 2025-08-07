import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '@components/molecules/table';

const meta = {
  title: 'DataDisplay/Lists/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    caption: 'Table caption',
    columns: [
      { label: 'Column 1' },
      { label: 'Column 2', key: '2' },
      { label: 'Column 3' },
    ],
    rows: [
      {
        key: 'row-1',
        columns: [
          { value: 'Row 1, Column 1' },
          { value: 'Row 1, Column 2' },
          { value: 'Row 1, Column 3' },
        ],
      },
      {
        key: 'row-2',
        columns: [
          { value: 'Row 2, Column 1' },
          { value: 'Row 2, Column 2' },
          { value: 'Row 2, Column 3' },
        ],
      },
    ],
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default = {} satisfies Story;
