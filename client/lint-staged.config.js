module.exports = {
	'src/**/*.{ts?(x),js?(x)}': ['prettier --write', 'eslint --fix', () => 'tsc -p ./tsconfig.json --noEmit']
	// './packages/client/src/**/*.{ts,tsx}': ['prettier --write', 'eslint --fix'],
	// './packages/server/src/**/*.ts': ['prettier --write', 'eslint --fix'],
};

	// '*.{ts?(x),js?(x)}': ['prettier --write', 'eslint --fix', () => 'tsc -p client/tsconfig.json --noEmit']

