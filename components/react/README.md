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

Import our CSS by adding this line to your index file.

```typescript
import '@ivao/atmosphere-react/dist/styles/index.css';
```

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
"@ivao/atmosphere-react": "file:../atmosphere/components/react/ivao-atmosphere-react-0.1.0-next.2.tgz",

```
