import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Toast } from '@components/molecules/toast';

import { useToast } from '@hooks/useToast';

import { ToastProvider } from 'src/lib/contexts/ToastProvider';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  decorators: (Story) => (
    <div className={'min-h-96'}>
      <ToastProvider>
        <Story />
      </ToastProvider>
    </div>
  ),
  args: {
    action: 'Toast Action',
    actionAltText: 'Screen reader text for the action',
    title: 'Toast Title',
    description: 'Toast Description',
  },
  argTypes: {
    title: {
      description: 'Title of the Toast.',
      type: 'string',
    },
    description: {
      description: 'Description of the Toast.',
      type: 'string',
    },
    action: {
      description: 'Action to trigger a toast.',
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    actionAltText: {
      description:
        'Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.',
      type: 'string',
    },
    duration: {
      description: 'Duration of the toast.',
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    toastProps: {
      description:
        'Props to pass to the toast. See https://www.radix-ui.com/primitives/docs/components/toast#root for more details.',
      control: 'object',
      table: {
        type: {
          summary: 'ToastProps',
        },
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const ToastStory = {
  name: 'Toast',
  render: (args) => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  },
} satisfies Story;

export const PermanentToastStory = {
  name: 'Permanent Toast',
  args: {
    duration: 99999999,
  },
  render: (args) => {
    const toast = useToast();
    return <Button onClick={() => toast(args)}>Add Toast</Button>;
  },
} satisfies Story;
