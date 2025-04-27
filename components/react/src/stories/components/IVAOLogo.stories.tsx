import type { Meta, StoryObj } from '@storybook/react';

import { IVAOLogo } from '@components/atoms/ivao-logo';

const meta = {
  title: 'Components/IVAOLogo',
  component: IVAOLogo,
  tags: ['autodocs'],
  args: {
    color: 'atmos',
    size: 'md',
  },
  argTypes: {
    color: {
      description: 'Color of the icon.',
      control: 'inline-radio',
      options: ['white', 'atmos'],
      table: {
        defaultValue: {
          summary: 'atmos',
        },
      },
    },
    size: {
      description: 'Size of the icon.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
  },
} satisfies Meta<typeof IVAOLogo>;

export default meta;
type Story = StoryObj<typeof IVAOLogo>;

export const Primary = {} satisfies Story;

export const White = {
  args: {
    color: 'white',
  },
} satisfies Story;
