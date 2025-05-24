import { CloudDownload, Settings2 } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@components/atoms/button';
import { ListItem } from '@components/molecules/list-item';

const image =
  'https://virtualsky.ivao.aero/content/images/size/w300/2022/01/183607355_10159966568413689_568014047533682934_n.png';

const meta = {
  title: 'Components/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The ListItem component is used to display a list item with an optional image and icon. It can also contain actions like buttons. It must be used inside a `<ul>`.',
      },
    },
  },
  args: {
    title: 'List Item',
    description: 'This is a list item',
    imageSrc: image,
  },
  argTypes: {
    children: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    icon: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default = {} satisfies Story;

export const WithOutImageAndIcon = {
  args: {
    imageSrc: undefined,
    icon: undefined,
  },
} satisfies Story;

export const WithImage = {
  args: {
    imageSrc: image,
    icon: undefined,
  },
} satisfies Story;

export const WithAction = {
  args: {
    children: (
      <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
    ),
  },
} satisfies Story;

export const WithPrimaryAndSecondaryAction = {
  args: {
    children: (
      <>
        <Button variant={'outline'}>
          Configure
          <Settings2 className="size-4" />
        </Button>
        <Button variant={'secondary'}>
          Install
          <CloudDownload className="size-4" />
        </Button>
      </>
    ),
  },
} satisfies Story;
