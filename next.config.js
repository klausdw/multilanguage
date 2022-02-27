const { i18n } = require('./next-i18next.config')

const securityHeaders = [
	{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
]

module.exports = {
	i18n,
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers: securityHeaders,
			},
		]
	},

	// async redirects() {
	// 	return [
	// 		{
	// 			source: '/candidate', // automatically handles all locales
	// 			destination:
	// 				'/trabalhar-na-alemanha-como-enfermeiro&enfermeiros-na-alemanha', // automatically passes the locale on
	// 			locale: false,
	// 			permanent: false,
	// 		},
	// 		{
	// 			// does not handle locales automatically since locale: false is set
	// 			source: '/de/candidate',
	// 			destination: '/de/arbeiten-in-deutschland',
	// 			locale: false,
	// 			permanent: false,
	// 		},
	// {
	// 	// this matches '/' since `en` is the defaultLocale
	// 	source: '/en',
	// 	destination: '/en/another',
	// 	locale: false,
	// 	permanent: false,
	// },
	// {
	// 	// this gets converted to /(en|fr|de)/(.*) so will not match the top-level
	// 	// `/` or `/fr` routes like /:path* would
	// 	source: '/(.*)',
	// 	destination: '/another',
	// 	permanent: false,
	// },
	// 	]
	// },
}
