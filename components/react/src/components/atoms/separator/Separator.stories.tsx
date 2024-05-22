import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '@components/atoms/separator';

const meta: Meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      description: 'Orientation of the separator.',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      name: 'Decorative',
      description: 'Whether the separator is decorative or not.',
      control: 'boolean',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {},
};

export const Demo: Story = {
  decorators: (Story) => (
    <div className="w-min">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Story className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Story orientation="vertical" />
        <div>Docs</div>
        <Story orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
  render: (props, context) => {
    return (
      <Separator
        {...props}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        orientation={context.orientation}
      />
    );
  },
};
