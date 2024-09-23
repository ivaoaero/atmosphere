// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

import type { Config } from 'typescript-eslint';

export default tseslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-argument
  ...storybook.configs['flat/recommended'],
) as Config[];
