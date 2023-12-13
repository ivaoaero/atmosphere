# IVAO Prettier config

This package is a shared configuration file for Prettier.
To use this config, follow the installation instructions.

## Installation

Install the following packages:
- `prettier`
- `@ivaoaero/prettier-config`

`yarn add -D prettier @ivaoaero/prettier-config`

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
