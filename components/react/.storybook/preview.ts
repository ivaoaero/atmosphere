import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';

import type { Preview, ReactRenderer } from '@storybook/react';

import '../src/styles/storybook.css';
import '../src/styles/colors.css';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
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
