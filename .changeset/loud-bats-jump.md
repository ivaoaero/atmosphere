---
"@ivao/atmosphere-react": patch
---

**fix(select): forward id to trigger instead of leaking to SelectRoot**

**WHAT:** Destructures `id` from `SelectProps` and forwards it to `SelectTrigger` instead of spreading it into `SelectRoot`.

**WHY:** DOM attributes like `id` were incorrectly passed to Radix UI's `SelectRoot`, which does not support them. This caused React warnings and prevented consumers from properly labeling or testing the select component.

**HOW:** No consumer action required. Passing `id` to `<Select />` now correctly places it on the trigger element.
