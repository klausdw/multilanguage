import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import enfermeira from '../public/assets/enfermeira.webp'

const Home: NextPage = () => {
	const { t } = useTranslation()
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
			<h1 className="text-2xl pt-4 px-4 tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
				<span className="block">AB Connection</span>
			</h1>
			<div className="mt-4 grid grid-cols-1 lg:grid-cols-2">
				<Image
					src={enfermeira}
					alt="Enfermeira logo"
					loading="lazy"
					objectFit="cover"
				/>
				<div className="px-8 mt-6">
					<h1 className="text-xl text-gray-500 sm:text-2xl sm:max-w-xl sm:mx-auto md:text-2xl lg:mx-0">
						{t('home1')}
					</h1>
					<h2 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
						{t('home2')}
					</h2>
					<h3 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
						{t('home3')}
					</h3>
					<div className="flex justify-center items-center space-x-10 mb-10 mt-10 md:space-x-0">
						<a
							href={t('candidatepath')}
							className="max-w-md px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 md:py-4 md:px-4 md:text-lg md:items-center md:flex"
						>
							{t('home5')}
						</a>
						<a
							href={t('contactpath')}
							className="px-8 py-3 border border-ab text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-200 md:py-4 md:px-4 md:text-lg"
						>
							{t('home6')}
						</a>
					</div>
				</div>
			</div>
			<Footer />
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

export default Home
