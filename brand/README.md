# Atmosphere Brand

The brand package is the framework-neutral source of truth for Atmosphere
design tokens. Its canonical source uses plain color strings and font-family
arrays, and the package exposes generated formats for different consumers.

Color groups can define a default by referencing another option in the same
group. For example, `"DEFAULT": "700"` makes Atmos 700 the group's default
without duplicating its value.

## JavaScript

```ts
import { colors, fonts, tokens } from '@ivao/atmosphere-brand';
```

`tokens` is the canonical token document. `colors` and `fonts` retain the
convenience API used by existing JavaScript consumers.

## CSS custom properties

```css
@import '@ivao/atmosphere-brand/tokens.css';
```

This defines framework-neutral, prefixed custom properties such as
`--ivao-color-atmos-700` and `--ivao-font-sans`.

## Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@ivao/atmosphere-brand/theme.css';
```

The theme adapter maps the neutral brand properties to Tailwind theme
variables, enabling utilities such as `bg-atmos-700`, `text-fuselage-800`, and
`font-head`.

The canonical JSON document is also available as:

```ts
import tokens from '@ivao/atmosphere-brand/tokens.json';
```
