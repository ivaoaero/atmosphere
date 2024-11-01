import { type Config } from 'typescript-eslint';

import base from './base';
import prettier from './prettier';
import react from './react';
import storybook from './storybook';
import tailwind from './tailwind';

export default {
  configs: {
    base,
    prettier,
    react,
    storybook,
    tailwind,
  },
  setups: {
    reactRecommended: [...base, ...prettier, ...react, ...tailwind],
    reactRecommendedNoPrettier: [...base, ...react, ...tailwind],
  },
} as {
  configs: Record<'base' | 'prettier' | 'react' | 'storybook' | 'tailwind', Config[]>;
  setups: Record<'reactRecommended', Config[]>;
};
