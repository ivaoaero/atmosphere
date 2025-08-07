import { useId, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@components/molecules/pagination';

const meta = {
  title: 'DataDisplay/Lists/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    totalPages: 10,
    onPageChange: (page: number) => console.log(page),
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default = {} satisfies Story;

export const DefaultActivePage = {
  args: {
    defaultActivePageIdx: 3,
  },
} satisfies Story;

export const ActivePageManaged = {
  decorators: (Story) => {
    const [activePage, setActivePage] = useState(5);
    const id = useId();

    return (
      <div>
        <div className="flex justify-center gap-2">
          <label htmlFor={id} className="mr-2">
            Active page:
          </label>
          <input
            id={id}
            type="number"
            value={activePage}
            className="h-8 w-12 text-center"
            onChange={(e) => setActivePage(parseInt(e.currentTarget.value))}
          />
        </div>
        <Story activePageIdx={activePage} onPageChange={setActivePage} />
      </div>
    );
  },
  render: (props, context) => {
    return (
      <Pagination
        {...props}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        activePageIdx={context.activePageIdx}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        onPageChange={context.onPageChange}
      />
    );
  },
} satisfies Story;
