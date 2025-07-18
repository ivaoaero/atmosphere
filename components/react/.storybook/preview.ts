import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';

import type { Preview, ReactRenderer } from '@storybook/react';

import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'theme',
      values: [{ name: 'theme', value: `rgb(var(--background))` }],
    },
  },
};

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export default preview;
