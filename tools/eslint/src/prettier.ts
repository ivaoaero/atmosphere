import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

import type { Config } from 'typescript-eslint';

export default tseslint.config(prettier) as Config[];
