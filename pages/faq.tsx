import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import FooterInline from '@components/FooterInline'

const Faq: React.FC = () => {
	const { t } = useTranslation('faq')
	const faqs = [
		{ ask: t('faq3'), ans: t('faq4') },
		{ ask: t('faq5'), ans: t('faq6') },
		{ ask: t('faq7'), ans: t('faq8') },
		{ ask: t('faq9'), ans: t('faq10') },
		{ ask: t('faq11'), ans: t('faq12') },
	]
	return (
		<>
			<Header
				title={t('title')}
				keywords={t('keywords')}
				description={t('description')}
				path={t('path')}
				hreflang={t('hreflang')}
				author={t('author')}
			/>
			<div className="bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="fixed right-1 p-2 bottom-1 mb-24 mr-2 lg:mr-10 sm:mb-20 bg-whats-app border-4 border-whats-app rounded-full text-white z-10">
						<a
							href="https://wa.me/+491736218918"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg
								className="w-8 h-8 fill-current"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
							</svg>
						</a>
					</div>
					<div className="absolute right-0 w-1/3 lg:pb-6 lg:absolute lg:right-0 lg:w-1/2 sm:absolute sm:right-0 sm:w-2/2 sm:mr-4">
						<picture>
							<source
								srcSet="/assets/enfermeira-perguntas-alemanha.webp"
								type="image/webp"
							/>
							<source
								srcSet="/assets/enfermeira-perguntas-alemanha.jpg"
								type="image/jpeg"
							/>
							<img
								className="h-26 w-full object-cover lg:w-full lg:h-full sm:w-48"
								src="/assets/enfermeira-perguntas-alemanha.jpg"
								alt="Enfermeira - FAQ"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="relative pt-8 pb-8 bg-none sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main className="mx-auto max-w-7xl px-4 sm:px-6 ">
							<div className="sm:text-left lg:text-left">
								<h1 className="px-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-16 after:h-1 after:ml-0 after:bg-blue-600">
									<span className="block"> {t('faq1')} </span>
								</h1>
								<div className="mt-6 mb-4 max-w-lg mx-auto">
									<h2 className="text-center underline text-xl tracking-tight font-extrabold text-gray-900 md:text-2xl select-none">
										🙋‍♀️ {t('faq2')} 🙋
									</h2>
								</div>
								{faqs.map((faq) => (
									<div className="max-w-lg mx-auto my-6" key={faq.ask}>
										<details className="cursor-pointer open:border-2 open:border-blue-100 open:ring-1 open:ring-black/5 open:ring-white/10 open:shadow-lg bg-gray-200 p-4 rounded-xl">
											<summary className="text-2xl tracking-tight font-extrabold text-gray-700 sm:text-xl md:text-xl select-none">
												{faq.ask ? <>{faq.ask}</> : null}
											</summary>
											<div className="pr-4 mt-3 ml-4 text-lg leading-6 text-blue-600 text-justify">
												<p>{faq.ans ? <>{faq.ans}</> : null}</p>
											</div>
										</details>
									</div>
								))}
							</div>
							<h3 className="mt-10 mb-40 sm:mb-20 sm:mt-6">
								{t('whats-app')}
							</h3>
						</main>
					</div>
				</div>
			</div>
			<FooterInline />
		</>
	)
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['faq', 'navbar', 'footer'])),
	},
})

export default Faq
