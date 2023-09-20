import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NavHeader from '@components/NavHeader'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/react'

const GoogleAnalytics = dynamic(() => import('lib/GoogleAnalytics'))

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavHeader />
			<Component {...pageProps} />
			<GoogleAnalytics />
			<Analytics />
		</>
	)
}

export default appWithTranslation(MyApp)
