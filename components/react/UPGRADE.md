# Upgrading Atmosphere React to v3

Atmosphere React v3 replaces its Tailwind CSS v3 preset with a Tailwind CSS v4
theme adapter. This guide assumes you are upgrading from Atmosphere React v2.

The React component imports and APIs remain the same. The breaking changes are
in the Tailwind integration, package CSS exports, and design-token values.

## Requirements

- React 18.2 or newer
- Tailwind CSS v4 when using the Tailwind integration
- Safari 16.4+, Chrome 111+, or Firefox 128+

Upgrade the application's own Tailwind setup by following the official
[Tailwind CSS v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide).
Applications that must support older browsers should remain on Atmosphere React
v2 and Tailwind CSS v3.

## 1. Upgrade Atmosphere React

```sh
pnpm add @ivao/atmosphere-react@^3
```

Also upgrade the application's Tailwind dependencies and build integration to
v4 as described in the Tailwind upgrade guide.

## 2. Replace the Atmosphere preset

The `tailwind.preset.ts` export has been removed. Remove the Atmosphere preset
and bundle entry from `tailwind.config.*`:

```ts
// Remove this v2 configuration.
import ivaoPreset from '@ivao/atmosphere-react/tailwind.preset.ts';

export default {
  content: [
    './src/**/*.tsx',
    './node_modules/@ivao/atmosphere-react/dist/atmosphere-react.js',
  ],
  presets: [ivaoPreset],
};
```

Replace the old Atmosphere source stylesheet:

```css
/* Remove this v2 import. */
@import '@ivao/atmosphere-react/src/styles/index.css';
```

with these imports in the application's main CSS file:

```css
@import 'tailwindcss';
@import '@ivao/atmosphere-react/theme.css';
```

Keep the imports in this order. The new Atmosphere theme adapter provides:

- Atmosphere brand colors and fonts
- Component semantic tokens and dark mode
- The `xs` breakpoint and Atmosphere container utility
- Component animations and Radix variants
- The Atmosphere component bundle as a Tailwind source

The adapter's bundled source registration replaces the v2
`node_modules/@ivao/atmosphere-react/dist/atmosphere-react.js` content entry.
Atmosphere-specific configuration no longer belongs in
`tailwind.config.*`. Add application customizations after the imports using
Tailwind v4's CSS-first directives:

```css
@import 'tailwindcss';
@import '@ivao/atmosphere-react/theme.css';

@theme {
  --color-application-brand: #0057b8;
}
```

## 3. Update Atmosphere CSS imports

Atmosphere React v3 exposes explicit public package entry points. Imports from
internal `src` or `dist` paths are no longer supported.

| v2 import | v3 replacement |
| --- | --- |
| `@ivao/atmosphere-react/tailwind.preset.ts` | Removed; use `@ivao/atmosphere-react/theme.css` |
| `@ivao/atmosphere-react/src/styles/index.css` | `tailwindcss` plus `@ivao/atmosphere-react/theme.css` |
| `@ivao/atmosphere-react/src/styles/colors.css` | Removed; use the theme adapter or `@ivao/atmosphere-brand/tokens.css` |
| `@ivao/atmosphere-react/dist/styles/index.css` | `@ivao/atmosphere-react/styles.css` |

The supported Atmosphere React exports are:

- `@ivao/atmosphere-react`
- `@ivao/atmosphere-react/theme.css`
- `@ivao/atmosphere-react/styles.css`

## 4. Update custom theme overrides

Atmosphere's semantic custom properties keep their existing names, but their
values are now complete CSS colors instead of space-separated RGB channels.

```css
/* v2 */
:root {
  --primary: 13 44 153;
}

/* v3 */
:root {
  --primary: #0d2c99;
}
```

Use any complete CSS color value, such as hex, `rgb()`, or `oklch()`. Review
overrides for the following properties and their `-foreground` variants:

- `--body`
- `--background`
- `--primary`
- `--secondary`
- `--muted`
- `--accent`
- `--destructive`
- `--border`
- `--input`
- `--ring`
- `--popover`
- `--card`

The underlying brand custom properties are now prefixed and also contain
complete color values:

```css
/* v2 */
color: rgb(var(--atmos-700));

/* v3 */
color: var(--ivao-color-atmos-700);
```

Applications that consume framework-neutral brand properties directly should
import:

```css
@import '@ivao/atmosphere-brand/tokens.css';
```

Atmosphere React's `theme.css` already includes
`@ivao/atmosphere-brand/theme.css`, so Tailwind applications should not import
the brand theme separately.

## 5. CSS-only applications

Applications that do not compile Tailwind classes can use the prebuilt
stylesheet:

```ts
import '@ivao/atmosphere-react/styles.css';
```

Use either the Tailwind theme integration or the prebuilt stylesheet. Importing
both is unnecessary and can duplicate the generated styles.

## 6. Verify the upgrade

After upgrading:

1. Confirm that Atmosphere components and application Tailwind classes are
   styled.
2. Check light and dark themes, especially custom semantic-token overrides.
3. Exercise animated components such as dialogs, dropdowns, sheets, tooltips,
   toasts, and navigation menus.
4. Confirm that no application code imports Atmosphere files through internal
   `src` or `dist` paths.
