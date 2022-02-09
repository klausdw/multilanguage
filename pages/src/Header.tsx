import Head from 'next/head'

const Header: React.FC<{
	title: string
	keywords: string
	description: string
	path: string
}> = ({ title, keywords, description, path }) => {
	// TODO: define Date in the i18n
	// create date function with UTC zones.
	const APP_ROOT_URL = 'https://test.com'

	// Absolute page url
	const pageUrl = `${APP_ROOT_URL}${path}`
	const now = new Date()
	const month = now.getMonth()
	const year = now.getFullYear()
	const day = now.getDay()
	// TODO: test date
	const date = `${day}/${month}/${year}`

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="audience" content="Alle" key="audience" />
				<meta name="created" content={date} key="created" />
				<meta name="date" content={date} key="date" />
				<meta name="description" content={description} key="description" />
				<meta name="keywords" content={keywords} key="keywords" />
				<meta name="referrer" content="origin" key="referrer" />
				<meta name="robots" content="index,follow" key="robots" />

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
			</Head>
		</>
	)
}

export default Header
