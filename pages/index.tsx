import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from './src/Header'

const Home: NextPage = () => {
	const router = useRouter()
	const { t } = useTranslation()
	return (
		<>
			<div className={styles.container}>
				<Header
					title={t('title')}
					keywords={t('keywords')}
					description={t('description')}
					path={t('path')}
				/>

				<div>
					<Link href="/" locale={router.locale === 'pt' ? 'de' : 'pt'}>
						<button>{t('change-locale')}</button>
					</Link>
					<Link href="/second-page">
						<button type="button">{t('to-second-page')}</button>
					</Link>
				</div>

				<footer className={styles.footer}></footer>
			</div>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, ['common'])),
	},
})

export default Home
