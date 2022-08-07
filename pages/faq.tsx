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
									<h1 className="text-center underline text-xl tracking-tight font-extrabold text-gray-900 md:text-2xl select-none">
										🙋‍♀️ {t('faq2')} 🙋
									</h1>
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
