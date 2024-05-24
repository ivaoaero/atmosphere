import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '@components/molecules/slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  args: {
    defaultValue: [20],
    min: 0,
    max: 100,
    step: 1,
    orientation: 'horizontal',
    dir: 'ltr',
  },
  argTypes: {
    defaultValue: {
      name: 'defaultValue',
      description: 'The default value of the slider.',
      control: { type: 'array' },
    },
    min: {
      name: 'min',
      description: 'The minimum value of the slider.',
      control: 'number',
    },
    max: {
      name: 'max',
      description: 'The maximum value of the slider.',
      control: 'number',
    },
    step: {
      name: 'step',
      description: 'The step value of the slider.',
      control: 'number',
    },
    orientation: {
      name: 'Orientation',
      description: 'The orientation of the slider.',
      options: ['horizontal', 'vertical'],
      control: {
        type: 'select',
      },
    },
    dir: {
      name: 'Direction',
      description: 'The direction of the slider.',
      options: ['ltr', 'rtl'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default = {} satisfies Story;
