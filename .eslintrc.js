module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'next',
		'next/core-web-vitals',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: { '@next/next/no-img-element': 'off' },
	settings: {
		react: {
			version: 'latest',
		},
	},
}
