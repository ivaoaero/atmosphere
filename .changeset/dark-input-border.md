---
'@ivao/atmosphere-react': patch
---

Fix dark mode's `--input` colour, which matched the background: inputs, textareas and selects had no visible border, and an unchecked switch had no visible track. It now matches `--border`, as in light mode.
