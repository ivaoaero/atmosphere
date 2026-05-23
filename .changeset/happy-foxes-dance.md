---
"@ivao/atmosphere-react": minor
---

**feat(data-table): use meta.name instead of column.id in view options**

**WHAT:** `DataTableViewOptions` now reads `meta.name` from column definitions to display human-readable labels in the "Toggle columns" dropdown.

**WHY:** The dropdown previously showed raw column IDs like `firstName` or `createdAt`, which are not user-friendly. Consumers needed a way to provide custom display names.

**HOW:** Add `meta: { name: 'Your Label' }` to any column definition:

```tsx
const columns = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    meta: { name: 'First Name' },
  },
];
```

When `meta.name` is absent, the component falls back to `column.id` for backward compatibility.
