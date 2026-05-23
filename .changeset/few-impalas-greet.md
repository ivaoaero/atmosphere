---
"@ivao/atmosphere-react": patch
---

**fix(sidebar): add overflow-y-auto to scrollable content area**

**WHAT:** Added `overflow-y-auto` to the inner scrollable container in `SidebarContainer`.

**WHY:** When the sidebar contained more items than the viewport height, content was clipped and users could not access lower items. There was no scroll handling.

**HOW:** No consumer action required. Sidebars will now scroll automatically when content exceeds the available height.
