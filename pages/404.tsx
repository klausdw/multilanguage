import { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import FooterInline from '@components/FooterInline'

const Page404: NextPage = () => {
	const { t } = useTranslation('common')

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
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<picture>
							<source srcSet="/assets/berlin1.webp" type="image/webp" />
							<source srcSet="/assets/berlin1.jpg" type="image/jpeg" />
							<img
								className="h-full w-full object-cover object-center"
								src="/assets/berlin1.jpg"
								alt="Berlin"
								loading="lazy"
							/>
						</picture>
					</div>
					<div className="relative pt-8 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<main className="mx-auto max-w-7xl px-4 sm:px-6 ">
							<div className="sm:text-justify lg:text-left">
								<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
									<span className="block">{t('error1')}</span>{' '}
								</h1>
								<div className="p-6 py-8">
									<p className="text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0 ">
										{t('error')}
									</p>
								</div>
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
		...(await serverSideTranslations(locale as string, [
			'common',
			'navbar',
			'footer',
		])),
	},
})

export default Page404
