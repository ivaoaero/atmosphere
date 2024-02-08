import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '@components/molecules/switch';

const meta = {
  title: 'Components/Inputs/Switch',
  component: Switch,
  args: {},
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default = {} satisfies Story;
