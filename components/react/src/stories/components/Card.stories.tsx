import { AlertCircleIcon } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Alert } from '@components/molecules/alert';
import { Card } from '@components/molecules/card';

const meta = {
  title: 'DataDisplay/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Card Title',
    description: 'Card Description',
    content: 'Card Content',
    footer: 'Card Footer',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    content: {
      options: ['Card Content', 'Card Content Alert'],
      mapping: {
        'Card Content': 'Card Content',
        'Card Content Alert': (
          <Alert title={'Card Content Alert'} Icon={AlertCircleIcon} />
        ),
      },
    },
    footer: {
      options: ['Card Footer', 'Card Footer Button'],
      mapping: {
        'Card Footer': 'Card Footer',
        'Card Footer Button': (
          <Button variant={'primary'}>Card Footer Button</Button>
        ),
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default = {} satisfies Story;
