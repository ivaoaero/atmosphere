---
'@ivao/atmosphere-react': minor
---

Enhanced Navbar component with new customization options:

- Added `logoVariant` prop: set to 'icon-only' to always show only the icon, or leave undefined for responsive behavior (icon on mobile, full logo on desktop)
- Added `diagonalDivider` prop: boolean to toggle between straight (default) and diagonal divider
- Changed `title` prop type from `string` to `ReactNode` to allow custom styling and formatting of the title
