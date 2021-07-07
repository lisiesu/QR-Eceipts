module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
		'react-app',
		'react-app/jest',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
		project: 'tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'import'],
	ignorePatterns: [
		'.eslintrc.js',
		'*spec.ts',
		'lint-staged.config.js',
		'service-worker.ts',
	],
	rules: {
		'no-param-reassign': 0,
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-shadow': 'warn',
		'no-console': 'off',
		'jsx-a11y/label-has-associated-control': 'warn',
		'jsx-a11y/click-events-have-key-events': 'warn',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'react/require-default-props': 'warn',
		'import/no-extraneous-dependencies': 'warn',

		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
