import Head from 'next/head'

const Header: React.FC<{
	title: string
	keywords: string
	description: string
	path: string
	hreflang: string
	author: string
}> = ({ title, keywords, description, path, hreflang, author }) => {
	// TODO: define Date in the i18n
	// create date function with UTC zones.
	const APP_ROOT_URL = 'https://abconnection.de'

	// Absolute page url
	const pageUrl = `${APP_ROOT_URL}${path}`
	const date = new Date().toLocaleString().split(',')[0]

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="audience" content="Alle" key="audience" />
				<meta name="created" content={date} key="created" />
				<meta name="date" content={date} key="date" />
				<meta name="description" content={description} key="description" />
				<meta name="keywords" content={keywords} key="keywords" />
				<meta name="author" content={author} />
				<meta name="referrer" content="origin" key="referrer" />
				<meta name="robots" content="index,follow" key="robots" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta name="og:title" property="og:title" content={title} />
				<meta
					name="og:description"
					property="og:description"
					content={description}
				/>
				<meta property="og:site_name" content="Proper Noun" />
				<meta property="og:url" content={pageUrl} />
				<link rel="canonical" href={pageUrl} />
				<link rel="alternate" href={hreflang} />
			</Head>
		</>
	)
}

export default Header
