---
"@ivao/atmosphere-react": minor
---

**feat(data-table): apply meta.className to table cells**

**WHAT:** `DataTable` now reads `meta.className` from column definitions and applies it to each `TableCell`.

**WHY:** Consumers needed a way to style individual table cells (e.g., text alignment, colors) without custom cell renderers for every column.

**HOW:** Add `meta: { className: 'your-class' }` to any column definition:

```tsx
const columns = [
  {
    accessorKey: 'amount',
    header: 'Amount',
    meta: { className: 'text-right font-mono' },
  },
];
```
