const { i18n } = require('./next-i18next.config')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const webpack = require('webpack')

const securityHeaders = [
	{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
]
const nextConfigs = {
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
	async rewrites() {
		return [
			{
				source: '/trabalhar-na-alemanha-como-enfermeiro&enfermeiros-na-alemanha',
				destination: '/candidate',
			},
			{
				source: '/FAQ-perguntas-frequentes',
				destination: '/faq',
			},
			{
				source: '/nossos-serviços',
				destination: '/service',
			},
			{
				source: '/sobre-ab-connection',
				destination: '/about',
			},
			{
				source: '/entre-em-contato',
				destination: '/contact',
			},
			{
				source: '/kontakt',
				destination: '/contact',
			},
		]
	},
	images: {
		domains: ['localhost'],
		deviceSizes: [640, 768, 1024, 1280, 1536],
		formats: ['image/webp'],
	},
	env: {
		EMAIL_FROM: process.env.EMAIL_FROM,
		EMAIL_PASS: process.env.EMAIL_PASS,
		GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
		WEBSITE_URL: process.env.WEBSITE_URL,
	},
	webpack: (config, { isServer }) => {
		if (isServer) {
			require('./scripts/sitemap-generator')
		}
		return config
	},
}

module.exports = withPlugins([[withBundleAnalyzer], nextConfigs])
