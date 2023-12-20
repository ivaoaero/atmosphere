# IVAO Prettier config

This package is a shared configuration file for Prettier.
To use this config, follow the installation instructions.

## Installation

Install the following packages:
- `prettier`
- `@ivaoaero/prettier-config`

`yarn add -D prettier @ivaoaero/prettier-config @ianvs/prettier-plugin-sort-imports`

### package.json

You can add the following to your `package.json` file to use this config:

```json
"prettier": "@ivaoaero/prettier-config",
```

Using this setup, you cannot modify anything.

### .prettierrc

You can add a `.prettierrc` file to your project to use this config:

```
"@ivaoaero/prettier-config"
```

Using this setup, you cannot modify anything.

### .prettierrc

You can add a `.prettierrc` file to your project to use this config:

```js
const ivaoPrettierConfig = require('@ivaoaero/prettier-config');
const generateImportOrder = require('@ivaoaero/prettier-config/generateImportOrder');

module.exports = {
  ...ivaoPrettierConfig,
  ...generateImportOrder(['@components', '', '@lib', '@config']),
};
```

Refer to the documentation of `generateImportOrder` for further information.

# Ignore files

``` ignorelang
# Package manager files
pnpm-lock.yaml
yarn.lock
package-lock.json
shrinkwrap.json

# Build outputs
lib
build
dist

# Prettier reformats code blocks inside Markdown, which affects rendered output
*.md

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# VSCode
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets
# Local History for Visual Studio Code
.history/
# Built Visual Studio Code Extensions
*.vsix

# JetBrains
# Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839
# User-specific stuff
.idea/**/workspace.xml
.idea/**/tasks.xml
.idea/**/usage.statistics.xml
.idea/**/dictionaries
.idea/**/shelf
# AWS User-specific
.idea/**/aws.xml
# Generated files
.idea/**/contentModel.xml
# Sensitive or high-churn files
.idea/**/dataSources/
.idea/**/dataSources.ids
.idea/**/dataSources.local.xml
.idea/**/sqlDataSources.xml
.idea/**/dynamic.xml
.idea/**/uiDesigner.xml
.idea/**/dbnavigator.xml
# Mongo Explorer plugin
.idea/**/mongoSettings.xml
# File-based project format
*.iws
# mpeltonen/sbt-idea plugin
.idea_modules/
# JIRA plugin
atlassian-ide-plugin.xml
# Cursive Clojure plugin
.idea/replstate.xml
# SonarLint plugin
.idea/sonarlint/
# Editor-based Rest Client
.idea/httpRequests

# Windows
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db
# Dump file
*.stackdump
# Folder config file
[Dd]esktop.ini
# Recycle Bin used on file shares
$RECYCLE.BIN/
# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp
# Windows shortcuts
*.lnk

# macOs
# General
.DS_Store
.AppleDouble
.LSOverride
# Icon must end with two \r
Icon
# Thumbnails
._*
# Files that might appear in the root of a volume
.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns
.com.apple.timemachine.donotpresent
# Directories potentially created on remote AFP share
.AppleDB
.AppleDesktop
Network Trash Folder
Temporary Items
.apdisk

# Linux
*~
# temporary files which can be created if a process still has a handle open of a deleted file
.fuse_hidden*
# KDE directory preferences
.directory
# Linux trash folder which might appear on any partition or disk
.Trash-*
# .nfs files are created when an open file is removed but is still being accessed
.nfs*
```
