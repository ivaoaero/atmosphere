import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@components/atoms/textarea';

const meta = {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: {
    disabled: false,
    placeholder: 'Placeholder',
  },
  argTypes: {
    disabled: {
      description: 'Whether the textarea is disabled.',
      type: 'boolean',
    },
    placeholder: {
      description: 'Placeholder text.',
      type: 'string',
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
