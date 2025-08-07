import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from '@components/molecules/scroll-area';

const meta = {
  title: 'DataDisplay/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  args: {
    className: 'h-[200px] w-[350px] rounded-md border p-4',
    children:
      "Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop Jokester. And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they couldn't help but laugh. And once they started laughing, they couldn't stop.",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    children: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    type: {
      control: {
        type: 'inline-radio',
      },
      options: ['auto', 'always', 'scroll', 'hover'],
      description: 'The type of scrollbars to render.',
      table: {
        defaultValue: {
          summary: 'auto / hover',
        },
      },
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default = {} satisfies Story;
