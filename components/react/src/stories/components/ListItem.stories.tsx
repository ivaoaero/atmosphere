import { CloudDownload, Plane, Settings2 } from 'lucide-react';

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
        category: 'Actions',
      },
    },
    title: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Content',
      },
    },
    description: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Content',
      },
    },
    isLoading: {
      control: 'boolean',
      table: {
        type: {
          summary: 'boolean',
        },
        category: 'Content',
      },
    },
    headingLevel: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      table: {
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6',
        },
        category: 'Content',
      },
    },
    'aria-label': {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Content',
      },
    },

    onClick: {
      control: 'object',
      table: {
        type: {
          summary: '() => void',
          detail:
            "When using onClick, `children` won't render as the link will take precedence.",
        },
        category: 'Actions',
      },
    },
    href: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
          detail:
            "When using href, `children` won't render as the link will take precedence.",
        },
        category: 'Actions',
      },
    },
    Icon: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
          detail: `LucideIcon`,
        },
        category: 'Icon',
      },
    },
    iconAriaLabel: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Icon',
      },
    },
    imageSrc: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Image',
      },
    },
    imageAlt: {
      control: 'text',
      table: {
        type: {
          summary: 'string',
        },
        category: 'Image',
      },
    },
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default = {} satisfies Story;

export const WithoutDescription = {
  args: {
    description: undefined,
  },
} satisfies Story;

export const WithOutImageOrIcon = {
  args: {
    imageSrc: undefined,
    Icon: undefined,
  },
} satisfies Story;

export const WithIcon = {
  args: {
    imageSrc: undefined,
    Icon: Plane,
  },
} satisfies Story;

export const Loading = {
  args: {
    isLoading: true,
  },
} satisfies Story;

export const LoadingWithAction = {
  args: {
    isLoading: true,
    children: (
      <Button variant={'secondary'}>
        Install
        <CloudDownload className="size-4" />
      </Button>
    ),
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

export const InteractiveOnClick = {
  args: {
    onClick: () => alert('List item clicked'),
  },
} satisfies Story;

export const InteractiveHref = {
  args: {
    href: 'https://ivao.aero',
  },
} satisfies Story;
