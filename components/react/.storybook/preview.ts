import { withThemeByClassName } from '@storybook/addon-themes';
import { themes } from 'storybook/theming';

import type { Preview, ReactRenderer } from '@storybook/react-vite';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'theme',
      options: {
        theme: { name: 'theme', value: `rgb(var(--body))` },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'theme' },
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
