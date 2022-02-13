import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from './src/Header'
import Navbar from './src/Navbar'

const Home: NextPage = () => {
	const { t } = useTranslation('common')
	return (
		<>
			<Header
				title={t('title')}
				keywords={t('keywords')}
				description={t('description')}
				path={t('path')}
				hreflang={t('hreflang')}
			/>
			<Navbar />
			<main>
				<h2>{t('home1')}</h2>
				<h3>{t('home2')}</h3>
				<p>{t('home3')}</p>
				<h3>{t('home4')}</h3>
				<h3>{t('home5')}</h3>
				<h3>{t('home6')}</h3>
				<h3>{t('home7')}</h3>
			</main>
			<style jsx>
				{`
					main {
						padding: 0 60px;
						margin-top: 40px;
					}
				`}
			</style>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['common', 'navbar'])),
	},
})

export default Home
