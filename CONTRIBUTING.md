# Contributing Guidelines

Thank you for your interest in contributing to IVAO Atmosphere Component Library!

## Our Pattern

We create components manually by following atomic design principles. Using the [shadcn/ui](https://ui.shadcn.com/) library as a reference, we split components into:

- **Atoms**: The smallest building blocks (e.g., buttons, inputs).
- **Molecules**: Combinations of atoms that form more complex elements (e.g., form fields, card headers).

Each component is placed in its respective folder (`atoms/` or `molecules/`). We avoid copying entire shadcn components; instead, we adapt and refactor them to fit our design and code standards.

**Steps to create a new component:**

1. Identify the smallest reusable parts (atoms).
2. Build molecules by composing atoms.
3. Reference shadcn/ui for accessibility and best practices.
4. Document usage and props in the component's README.

This approach ensures consistency, reusability, and maintainability across the design system.

## How to Contribute

1. **Fork the repository** and create your branch from `main`.
2. **Describe your changes** clearly in your pull request.
3. **Write tests** for new components or features (WIP).
4. **Follow coding standards** and existing patterns.
5. **Document your components** in the appropriate stories files.
6. **Create a changeset** we use [changesets](https://github.com/changesets/changesets) to let contributors declare how their changes shold be released.

## First Steps

1. Enable corepack `corepack enable`.

2. Run `pnpm i` to install node_modules.
   If you got an error when installing the node_modules with pnpm, you need to update corepack running `npm i -g corepack`.

3. Run `pnpm prebuild` to build the workspace required components.

4. To run Storybook you can run `pnpm dev:react:storybook`.

## Creating a changeset

1. On the root, run `pnpm changeset` and follow the CLI instructions.

## Code Style

- Use consistent naming conventions.
- Format code with Prettier (see `.prettierrc`).
- Prefer functional components and hooks.

## Issues & Discussions

- Search for existing issues before opening a new one.
- Use clear, descriptive titles and explanations.

## Pull Requests

- Keep PRs focused and small.
- Please add images or videos to see your components in action.
- Reference related issues in your PR description.
- Ensure all tests pass before requesting review.

## Code of Conduct

Please be respectful and constructive in all interactions.

---

Thank you for helping improve this project!

Built with ❤️ by the IVAO Web Developer Team from around the world.
