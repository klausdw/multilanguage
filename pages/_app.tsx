import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import NavHeader from '@components/NavHeader'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavHeader />
			<Component {...pageProps} />
		</>
	)
}

export default appWithTranslation(MyApp)
