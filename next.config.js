const { i18n } = require('./next-i18next.config')
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})
const webpack = require('webpack')
const withPreact = require('next-plugin-preact')

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
				source: '/trabalhar-na-alemanha-como-enfermeiro-enfermeiros-na-alemanha',
				destination: '/candidate',
			},
			{
				source: '/trabalahar-como-enfermeiro-na-alemanha',
				destination: '/enfermeiro',
			},
			{
				source: '/FAQ-perguntas-frequentes',
				destination: '/faq',
			},
			{
				source: '/blog/enfermeiros-na-alemanha',
				destination: '/blog',
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
	async redirects() {
		return [
			{
				source: '/de/blog/:slug',
				destination: '/de/',
				permanent: false,
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
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (isServer) {
			require('./scripts/sitemap-generator')
		}

		return config
	},
}

module.exports = withPlugins([withBundleAnalyzer, withPreact], nextConfigs)
