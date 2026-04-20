import { type Config } from 'tailwindcss';

import ivaoPreset from './tailwind.preset.ts';

export default {
  presets: [ivaoPreset],
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx,mdx}',
  ],
} satisfies Config;
