<p align="center">
  <img src="https://static.ivao.aero/img/logos/logo.svg" />
</p>

<div align="center" width="100%">
<h1>Atmosphere Design System</h1>
<p>Atmosphere is IVAO's framework-neutral brand token package and React component library, based on the excellent <a href='https://ui.shadcn.com/'>shadcn/ui</a> library.</p>
<a src="https://www.npmjs.com/package/@ivao/atmosphere-react"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40ivao%2Fatmosphere-react?link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40ivao%2Fatmosphere-react"></a>

</div>

## Requirements

1. Node 20 or newer.
2. React 18 or 19.
3. Safari 16.4+, Chrome 111+, or Firefox 128+ when compiling or extending the Tailwind CSS v4 theme.

## Usage

1. Install it.

```bash
npm install @ivao/atmosphere-react
yarn add @ivao/atmosphere-react
pnpm add @ivao/atmosphere-react
```

2. Add our CSS into your index file.

```typescript
import '@ivao/atmosphere-react/styles.css';
```

3. Use our components.

```typescript
import { Button } from '@ivao/atmosphere-react';

function MyComponent() {
  return (
    <div>
      <Button>Filter</Button>
    </div>
  );
}
```

4. See our [documentation and components here](https://ivaoaero.github.io/atmosphere/main).

## Brand tokens

The `@ivao/atmosphere-brand` package is the source of truth for colors and font
families. It exposes the canonical DTCG token document, a JavaScript API,
framework-neutral CSS custom properties, and a Tailwind CSS v4 theme adapter.

See the [brand package documentation](brand/README.md) for usage.

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting changes.

---

Built with ❤️ by the IVAO Web Developer Team from around the world.
