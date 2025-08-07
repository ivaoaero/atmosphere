import type { Meta, StoryObj } from '@storybook/react';

import { TooltipProvider } from '@components/atoms/tooltip';
import { DarkModeToggle } from '@components/molecules/dark-mode-toggle';

import { useTheme } from '@hooks/useTheme';

import { ThemeProvider } from 'src/lib/contexts/ThemeProvider';

const ThemeDisplay = () => {
  const { theme } = useTheme();
  const themeLabel =
    theme.substring(0, 1).toUpperCase() + theme.substring(1).toLowerCase();
  return (
    <span className="ml-8 text-center text-2xl">
      Theme: <b>{themeLabel}</b>
    </span>
  );
};

const meta = {
  title: 'Theme/DarkModeToggle',
  component: DarkModeToggle,
  tags: ['autodocs'],
  decorators: (Story) => (
    <ThemeProvider>
      <div className="flex items-center">
        <TooltipProvider>
          <Story />
        </TooltipProvider>
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  ),
  args: {
    className: 'inline-block',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    variant: {
      description: 'Appearance variant of the button.',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
      ],
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    title: {
      type: 'string',
      table: {
        type: {
          summary: 'string',
        },
      },
      description: 'A tooltip and accessibility label for the toggle.',
    },
    side: {
      control: 'inline-radio',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: {
          summary: 'Side',
        },
      },
    },
    sideOffset: {
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    align: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      table: {
        defaultValue: { summary: 'center' },
        type: {
          summary: 'Align',
        },
      },
    },
    alignOffset: {
      type: 'number',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
} satisfies Meta<typeof DarkModeToggle>;

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default = {} satisfies Story;

export const Small = {
  args: {
    size: 'sm',
  },
} satisfies Story;

export const CustomTitle = {
  args: {
    title: 'Switch to dark mode',
  },
} satisfies Story;
