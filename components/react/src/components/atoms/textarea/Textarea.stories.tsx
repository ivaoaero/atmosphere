import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@components/atoms/textarea';

const meta = {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  args: {
    disabled: false,
    placeholder: 'Placeholder',
  },
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Whether the textarea is disabled.',
      control: 'boolean',
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Placeholder text.',
      control: 'text',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default = {
  args: {
    disabled: false,
  },
} satisfies Story;
