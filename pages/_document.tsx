import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

export default class MyDoc extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps
	}

	render(): JSX.Element {
		/**
		 * locale, locales, defaultLocale, props = this.props.__NEXT_DATA__
		 */
		const { locale } = this.props.__NEXT_DATA__
		const defaultLanguage =
			locale === 'pt' ? 'pt-BR' : locale === 'de' ? 'de-DE' : undefined

		return (
			<Html lang={defaultLanguage} translate="no">
				<Head>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || []
  							function gtag(){dataLayer.push(arguments)}
  							gtag('js', new Date());
  							gtag('config', '${process.env.GOOGLE_ANALYTICS}');
					  `,
						}}
					/>
					<FavIcons />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

const FavIcons = () => (
	<>
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/favicons/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/favicons/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/favicons/favicon-16x16.png"
		/>
		<link rel="manifest" href="/favicons/site.webmanifest" />
		<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
		<meta name="msapplication-TileColor" content="#2d89ef" />
		<meta name="theme-color" content="#ffffff" />
	</>
)
