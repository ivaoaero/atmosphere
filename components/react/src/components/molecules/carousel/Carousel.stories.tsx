import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from '@components/molecules/carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  decorators: (Story) => (
    <div className={'m-auto max-w-md'}>
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
      name: 'Orientation',
      description: 'The orientation of the carousel.',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default = {} satisfies Story;
