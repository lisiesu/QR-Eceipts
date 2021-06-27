module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
		project: 'tsconfig.json'
  },
  plugins: [
    '@typescript-eslint','import'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
		'plugin:import/typescript',
    'airbnb-typescript',
		'prettier',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
		'no-console': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		]
  },
};
