import { GetStaticProps, NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ErrorProps } from 'next/error'

const Error = ({ statusCode }: ErrorProps) => {
	const { t } = useTranslation()

	return (
		<p className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
			{statusCode ? `${t('error-with-status')}` : `${t('error-without-status')}`}
		</p>
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

export default Error
