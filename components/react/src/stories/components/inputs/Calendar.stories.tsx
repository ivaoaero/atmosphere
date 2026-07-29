import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from '@components/atoms/calendar';

const meta = {
  title: 'Forms/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    showOutsideDays: true,
    captionLayout: 'dropdown',
  },
  argTypes: {
    showOutsideDays: {
      description:
        'See the `@daypicker/react` for mor information on how to use this component. It is a visual wrapper around the `@daypicker/react` component.',
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default = {} satisfies Story;
