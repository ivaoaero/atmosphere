import { colors } from '@ivaoaero/atmosphere-brand';

import { writeFileSync } from 'fs';

interface Color {
  [key: string]: string | Color;
}

const convertColorsToCSSVariables = (colors: Color, prefix: string = '--') => {
  let cssVariables = '';
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'object') {
      cssVariables += convertColorsToCSSVariables(
        value,
        `${prefix}${prefix.length === 2 ? '' : '-'}${key}`,
      );
    } else {
      cssVariables +=
        '    ' +
        (key === 'DEFAULT' ? prefix : `${prefix}-${key}`) +
        `: ${convertHexToRGB(value)}; /* ${value} */\n`;
    }
  }
  return cssVariables;
};

const convertHexToRGB = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return `${r} ${g} ${b}`; // Return RGB format
};

let cssContent = '@tailwind base;\n\n@layer base {\n  :root {\n';
cssContent += convertColorsToCSSVariables(colors);
cssContent += '  }\n}\n';
writeFileSync('./src/styles/colors.css', cssContent);
