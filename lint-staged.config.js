module.exports = {
	'*.ts': ['prettier --write', 'eslint --fix'],
	'/client/src/**/*.{ts?(x),js?(x)}': ['prettier --write', 'eslint --fix'],
	'/server/src/**/*.{ts,js}': ['prettier --write', 'eslint --fix']

	// '*.{ts?(x),js?(x)}': ['prettier --write', 'eslint --fix', () => 'tsc -p client/tsconfig.json --noEmit']
};
