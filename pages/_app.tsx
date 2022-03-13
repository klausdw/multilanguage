import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NavHeader from '@components/NavHeader'
import Script from 'next/script'
import { gtag } from '../lib/gtagConfig'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{/* check google analy. */}
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
			/>
			<Script strategy="lazyOnload"> {gtag} </Script>
			<NavHeader />
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(MyApp)
