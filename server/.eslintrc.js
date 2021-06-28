module.exports ={
	root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
		project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
		'prettier',
		'import'
  ],
  extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
		'airbnb-typescript/base',
		'plugin:prettier/recommended',
		'prettier',
  ],
  env: {
    jest: true,
    node: true,
  },
	ignorePatterns: ['.eslintrc.js', '*spec.ts', 'lint-staged.config.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'class-methods-use-this': 'off',
		'import/prefer-default-export':'off',
		'import/no-extraneous-dependencies':'warn',
		'no-useless-constructor':'warn',
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
  },
	overrides: [
		{
			files: ['src/**/*.ts'],
			excludedFiles: ['src/**/*spec.ts','test/**/*spec.ts']
		}
	]
}
