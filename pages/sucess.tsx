import Header from '@components/Header'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Sucess: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<Header
				title={t('success-title')}
				keywords={t('keywords')}
				description={t('description')}
				path={t('path')}
				hreflang={t('hreflang')}
				author={t('author')}
			/>
			<h1 className="text-2xl pt-4 px-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
				<span className="block">{t('success')}</span>
			</h1>
			<h2 className="mt-4 text-xl pt-4 px-4 tracking-tight font-medium text-gray-900 sm:text-2xl md:text-xl">
				{t('success1')}
			</h2>
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

export default Sucess
