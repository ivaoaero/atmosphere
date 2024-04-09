import { ThemeProvider } from 'lib/contexts/ThemeContext';

import type { Meta, StoryObj } from '@storybook/react';

import { DarkModeToggle } from '@components/molecules/dark-mode-toggle';

import { useTheme } from '@hooks/useTheme';

const ThemeDisplay = () => {
  const { theme } = useTheme();
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Theme: {theme}</h1>
    </div>
  );
};

const meta = {
  title: 'Components/DarkModeToggle',
  component: DarkModeToggle,
  decorators: (Story) => (
    <ThemeProvider>
      <Story />
      <ThemeDisplay />
    </ThemeProvider>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof DarkModeToggle>;

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default = {} satisfies Story;

export const CustomTitle = {
  args: {
    title: 'Switch to dark mode',
  },
} satisfies Story;
