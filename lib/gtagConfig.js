export const gtag = `
							window.dataLayer = window.dataLayer || []
  							function gtag(){dataLayer.push(arguments)}
  							gtag('js', new Date());
  							gtag('config', '${process.env.GOOGLE_ANALYTICS}');
					  `
