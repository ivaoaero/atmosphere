# Atmosphere Component Library by IVAO

## React

### Requirements

React version: 18.2 or newer.

The Tailwind CSS integration uses Tailwind CSS v4 and its modern browser
baseline: Safari 16.4+, Chrome 111+, and Firefox 128+.

### How to install

```bash
npm i @ivao/atmosphere-react
```

```bash
pnpm add @ivao/atmosphere-react
```

### Configure

#### Tailwind CSS v4

Import Tailwind and the Atmosphere theme adapter in your application CSS:

```css
@import 'tailwindcss';
@import '@ivao/atmosphere-react/theme.css';
```

The adapter includes the Atmosphere brand theme, the component semantic tokens,
animations, `tailwindcss-radix`, and the component bundle as a Tailwind source.
You can add your own CSS-first `@theme`, `@utility`, and `@custom-variant`
directives in the same entry file.

#### CSS only

Import our CSS by adding this line to your index file.

```typescript
import '@ivao/atmosphere-react/styles.css';
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
