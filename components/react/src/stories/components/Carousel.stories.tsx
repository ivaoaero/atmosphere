import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '@components/molecules/carousel';

const meta = {
  title: 'DataDisplay/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div
      className={'flex min-h-[350px] w-full items-center justify-center p-10'}
    >
      <Story />
    </div>
  ),
  args: {
    items: Array.from({ length: 10 }, (_, index) => ({
      children: `Item ${index + 1}`,
      key: index,
    })),
  },
  argTypes: {
    orientation: {
      description: 'The orientation of the carousel.',
      options: ['horizontal', 'vertical'],
      control: 'select',
    },
    items: {
      description:
        'The items to display in the carousel. For more information see https://ui.shadcn.com/docs/components/carousel',
      table: {
        type: {
          summary: 'HTMLAttributes<HTMLDivElement>[]',
        },
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default = {} satisfies Story;
