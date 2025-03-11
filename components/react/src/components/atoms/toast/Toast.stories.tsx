import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { Toast } from '@components/molecules/toast';

import { useToast } from '@hooks/useToast';

import { ToastProvider } from 'src/lib/contexts/ToastProvider';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  decorators: (Story) => (
    <ToastProvider>
      <Story />
    </ToastProvider>
  ),
  args: {
    action: 'Toast Action',
    actionAltText: 'test',
    title: 'Toast Title A',
    description:
      'Toast Description abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc',
  },
  argTypes: {
    title: {
      name: 'Title',
      description: 'Title of the Toast.',
      control: 'text',
    },
    description: {
      name: 'Description',
      description: 'Description of the Toast.',
      control: 'text',
    },
    action: {
      name: 'Action',
      description: 'Action to trigger a toast.',
    },
    actionAltText: {
      name: 'Action Alt Text',
      description:
        'Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.',
      control: 'text',
    },
    duration: {
      name: 'Duration',
      description: 'Duration of the toast.',
      control: 'number',
    },
    toastProps: {
      name: 'Toast Props',
      description:
        'Props to pass to the toast. See https://www.radix-ui.com/primitives/docs/components/toast#root for more details.',
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
