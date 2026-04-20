import type { Meta, StoryObj } from '@storybook/react-vite';

import { ErrorBoundaryComponent } from '@components/atoms/error-boundary/ErrorBoundary';

const meta = {
  title: 'Feedback/ErrorBoundary',
  component: ErrorBoundaryComponent,
  tags: ['autodocs'],
  args: {
    debugMode: false,
    error: new Error('This is a sample error'),
  },
  argTypes: {
    debugMode: {
      description: 'Show detailed error information',
      control: 'boolean',
    },
    error: {
      description: 'Error object to display when debugMode is true',
      control: 'object',
    },
  },
} satisfies Meta<typeof ErrorBoundaryComponent>;

export default meta;
type Story = StoryObj<typeof ErrorBoundaryComponent>;

export const Default = {} satisfies Story;

export const DebugMode = {
  args: {
    debugMode: true,
  },
} satisfies Story;

export const WithCustomError = {
  args: {
    debugMode: true,
    error: new Error('Custom error for testing purposes'),
  },
} satisfies Story;

export const ReloadAndClearActions = {
  args: {
    debugMode: false,
  },
} satisfies Story;
