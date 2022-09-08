import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NavHeader from '@components/NavHeader'
import GoogleAnalytics from 'lib/GoogleAnalytics'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavHeader />
			<Component {...pageProps} />
			<GoogleAnalytics />
		</>
	)
}

export default appWithTranslation(MyApp)
