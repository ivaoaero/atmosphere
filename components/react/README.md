# Atmosphere Component Library by IVAO

## React

### Requirements

React version: > 18.3

### How to install

```bash
npm i @ivao/atmosphere-react
```

```bash
pnpm add @ivao/atmosphere-react
```

### Configure

#### tailwindcss

If you want to use tailwindcss classes, customizations or overrides,
you need to add our [tailwind preset](https://v3.tailwindcss.com/docs/presets) to your `tailwind.config.ts` file.

```typescript
import ivaoPreset from '@ivao/atmosphere-react/tailwind.preset.ts'; // import the preset

import { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.tsx', // your files here...
    './node_modules/@ivao/atmosphere-react/dist/atmosphere-react.js', // let tailwind know about our components
  ],
  presets: [ivaoPreset], // add the preset here
} satisfies Config;
```

Additionally, you need to import our source CSS file that adds the color variables to your project.
In your app CSS file, add this line:

```css
@import '@ivao/atmosphere-react/src/styles/index.css';
```

You can extend your CSS file (e.g. add utilities or base classes)
and tailwind config (e.g. add colors) as you prefer.

#### CSS only

Import our CSS by adding this line to your index file.

```typescript
import '@ivao/atmosphere-react/dist/styles/index.css';
```

> This approach is sufficient if no further tailwind classes, customizations or overrides are needed.

## Contributing

### Testing Locally on another repo

You can use Storybook to see how the components look, however it's recommended to also test it on a more real environment as a new repo.

1. Run `pnpm dev:react:build` to build the library.
2. To use it on another repo, there are multiple ways, but one of the simplest ones is running

```bash
pnpm dev:react:pack
```

This command creates a `.tgz` file on the root of the `/components/react` folder. Copy the name of that file.

3. To use it on your repo, add this line to your `package.json`. Replace the `.tgz` file name.

```json
// Remember to change the version <FILE_NAME> to the file that was created
"@ivao/atmosphere-react": "file:../atmosphere/components/react/<FILE_NAME>",

```
