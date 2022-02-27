import { GetStaticProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import FooterInline from '@components/FooterInline'

const Candidate: React.FC = () => {
	const { t } = useTranslation('candidate')
	const candidate = [
		{
			name: t('home2'),
			description: t('home3'),
			desc1: t('home4'),
			desc2: t('home5'),
		},
		{
			name: t('home6'),
			description: t('home7'),
			desc1: t('home8'),
		},
		{ name: t('home9'), description: t('home10') },
		{ name: t('home11'), description: t('home12') },
		{
			name: t('home13'),
			description: t('home14'),
			desc1: t('home15'),
		},
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
			<main className="py-2 bg-white">
				<div className="px-8 py-4 sm:text-justify lg:text-left">
					<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
						<span className="block"> {t('home1')} </span>
					</h1>
				</div>
				<div className="max-w-7xl mt-2 mb-10 mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-20 md:gap-y-20">
							{candidate?.map((item) => (
								<div key={item.name} className="relative">
									<dt>
										<p className="text-lg leading-6 font-medium text-gray-800 border-b border-blue-600">
											{item.name}
										</p>
									</dt>
									<dd className="mt-2 px-4 text-base text-gray-700">
										✅ {item.description}
									</dd>
									<dd className="mt-2 px-4 text-base text-gray-700">
										{item.desc1 ? <> ✅ {item.desc1} </> : null}
									</dd>
									<dd className="mt-2 px-4 text-base text-gray-700">
										{item.desc2 ? <> ✅ {item.desc2} </> : null}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</main>
			<FooterInline />
		</>
	)
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'candidate',
			'navbar',
			'footer',
		])),
	},
})

export default Candidate
