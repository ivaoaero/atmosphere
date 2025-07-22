import { action } from '@storybook/addon-actions';

import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from '@components/molecules/slider';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  tags: ['autodocs'],
  args: {
    defaultValue: [20],
    min: 0,
    max: 100,
    step: 1,
    onValueChange: action('value change'),
    onValueCommit: action('value commit'),
  },
  argTypes: {
    defaultValue: {
      description:
        'The default value of the slider. Cannot be used with `value`!',
      table: {
        type: {
          summary: 'number[]',
        },
      },
    },
    value: {
      description:
        'The controlled value of the slider. Cannot be used with `defaultValue`!',
      table: {
        type: {
          summary: 'number[]',
        },
      },
    },
    min: {
      description: 'The minimum value of the slider.',
      type: 'number',
    },
    max: {
      description: 'The maximum value of the slider.',
      type: 'number',
    },
    step: {
      description: 'The step value of the slider.',
      type: 'number',
    },
    minStepsBetweenThumbs: {
      description:
        'The minimum permitted `step`s beteween multiple thumbs/values.',
      type: 'number',
    },
    orientation: {
      description: 'The orientation of the slider.',
      options: ['horizontal', 'vertical'],
      control: 'inline-radio',
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
      },
    },
    dir: {
      description: 'The direction of the slider.',
      options: ['ltr', 'rtl'],
      control: 'inline-radio',
      table: {
        type: {
          summary: 'ltr | rtl',
        },
      },
    },
    onValueChange: {
      description: 'Callback when the value changes.',
    },
    onValueCommit: {
      description:
        'Callback when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default = {} satisfies Story;

export const MultipleThumbs = {
  name: 'Multiple thumbs / Range',
  args: {
    defaultValue: [10, 20],
  },
} satisfies Story;

export const MinRange = {
  name: 'Minimum range with multiple thumbs',
  args: {
    defaultValue: [10, 20],
    minStepsBetweenThumbs: 10,
  },
} satisfies Story;
