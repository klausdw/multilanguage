import Script from 'next/script'

const GTAG = process.env.GOOGLE_ANALYTICS

const GoogleTag = () => (
	<>
		<Script
			async
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
		/>
		<Script
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
							window.dataLayer = window.dataLayer || []
  							function gtag(){dataLayer.push(arguments)}
  							gtag('js', new Date());
  							gtag('config', '${GTAG}');
					  `,
			}}
		/>
	</>
)

export default GoogleTag
