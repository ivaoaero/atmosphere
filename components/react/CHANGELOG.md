# @ivao/atmosphere-react

## 3.0.0-next.1
### Major Changes

- 7596195: TailwindCSS v4 bump

### Minor Changes

- 0f64e8e: data-table: unrestrict view options dropdown width
- 0f64e8e: data-table: add option to hide selected row count

### Patch Changes

- c1c59d0: data-table: display meta.name in view options
- 6d56c68: alert: no background for non-default variants
- 3ec9c6e: sidebar: make overflowing content accesible
- 2d1ac20: data-table: apply meta-className to table cells
- Updated dependencies [7596195]
  - @ivao/atmosphere-brand@2.0.0-next.0

## 2.1.0-next.0
### Minor Changes

- 167c383: add React 19 support

### Patch Changes

- 0c446e8: select: forward id to SelectTrigger instead of leaking to SelectRoot

## 2.0.0

### Major Changes

- d9b81fa: colors: add seperate body background color and variable
- 0dc1b30: upgrade Calendar to react-day-picker to v9

### Minor Changes

- 95c54af: Added dark mode support for ErrorBoundary
- 0260a7d: data table: add no results text option
- 2ff2247: Fixed navigation menu colors
- 48a5060: Enhanced Navbar component with new customization options:

  - Added `logoVariant` prop: set to 'icon-only' to always show only the icon, or leave undefined for responsive behavior (icon on mobile, full logo on desktop)
  - Added `diagonalDivider` prop: boolean to toggle between straight (default) and diagonal divider
  - Changed `title` prop type from `string` to `ReactNode` to allow custom styling and formatting of the title
- 9505b47: add tailwind preset
- 0260a7d: data table: add loading row
- 9b98964: Add error boundary component
- d50f21a: alert: allow ReactNode description

### Patch Changes

- 4b95a34: use default path exports
- 3bea7a7: toast: fix toastProps type
- f460ed6: navbar: remove default class `dark`
- c4acf70: prepare for OIDC release
- a967a6f: card: add background contrast to default background
- 7f25f9c: toast: make action alt text only required with action
- b0aa84d: make `getCoreRowModel` optional

## 1.0.0

### Major Changes

- 2f6bb17: 🎉 Initial Release - v1.0.0

  First stable release of Atmosphere Design System for React.

### Minor Changes

- 59990dc: move and unify stories + improve component docs
- 4265826: Update Navbar design & IVAOLogo usage and rendering logic
- 731b64d: Updated sidebar design on light and dark mode.
- f35fd7b: Fix build process to include the Tailwind CSS file.
- a2d7537: Update DarkModeToggle design
- 11d6f96: Fix primary button border color
- eb0f41c: Updated fuselage 50 and 100 colors. Added new ListItem component.
- c270c9d: fix pagination component showing non-existent pages
- 0ebdadb: Fix error on `Button` when using `asChild` prop or multiple children.
- e3b670f: feat(sidebar): add groups
- 85526f0: Fix sidebar item not having a defined size
- f47be02: Updated the design of the button. Removed green on dark mode. Fixed font on the @ivao/atmosphere-brand package
- 1b71f45: Added default style & fix contrast on some components

### Patch Changes

- 096e0f1: Export `ListItem` atoms & molecule
- b9f4b19: initial changeset release
