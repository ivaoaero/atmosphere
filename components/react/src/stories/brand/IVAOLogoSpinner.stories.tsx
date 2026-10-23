import type { Meta, StoryObj } from '@storybook/react-vite';

import { IVAOLogoSpinner } from '@components/atoms/ivao-logo-spinner';

const meta = {
  title: 'Brand/Logo Spinner',
  component: IVAOLogoSpinner,
  tags: ['autodocs'],
  args: {
    color: 'atmos',
    size: 'lg',
    label: 'Loading',
  },
  argTypes: {
    color: {
      description: 'Colour of the spinner.',
      control: 'inline-radio',
      options: ['white', 'atmos'],
      table: {
        defaultValue: {
          summary: 'atmos',
        },
      },
    },
    size: {
      description: 'Size of the spinner.',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    label: {
      description: 'Accessible label announced by screen readers.',
      control: 'text',
      table: {
        defaultValue: {
          summary: 'Loading',
        },
      },
    },
  },
} satisfies Meta<typeof IVAOLogoSpinner>;

export default meta;
type Story = StoryObj<typeof IVAOLogoSpinner>;

export const Primary = {} satisfies Story;

export const White = {
  args: {
    color: 'white',
  },
} satisfies Story;
