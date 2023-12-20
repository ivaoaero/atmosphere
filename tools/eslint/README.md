# IVAO EsLint config

This package is a shared configuration file for EsLint.
To use this config, follow the installation instructions.

## Installation

Install the following packages:
- `eslint`
- `@ivaoaero/eslint-config`
- `eslint-config-prettier`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-storybook`
- `eslint-plugin-tailwindcss`

`yarn add -D  eslint @ivaoaero/eslint-config eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-storybook eslint-plugin-tailwindcss`

### .eslintrc

You can add a `.eslintrc` file to your project to use this config:

```json
{
  "extends": [
    "@ivaoaero/eslint-config",
    "@ivaoaero/eslint-config/tailwind",
    "@ivaoaero/eslint-config/react",
    "@ivaoaero/eslint-config/storybook"
  ],
  "parserOptions": {
    "tsconfigRootDir": "./",
    "project": ["./tsconfig.json"]
  },
  "overrides": [
    {
      "files": ["**/*.{js,cjs}"],
      "extends": ["plugin:@typescript-eslint/disable-type-checked"]
    }
  ]
}

```

## Usage

The package provides four configurations:

- `@ivaoaero/eslint-config`: The base configuration for all projects.
- `@ivaoaero/eslint-config/tailwind`: The configuration for projects using TailwindCSS.
- `@ivaoaero/eslint-config/react`: The configuration for projects using React.
- `@ivaoaero/eslint-config/storybook`: The configuration for projects using Storybook.
