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
			<Image
				src={enfermeira}
				alt="Enfermeira logo"
				loading="lazy"
				objectFit="cover"
			/>
			<div>
				<h1 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
					{t('home1')}
				</h1>
				<h2 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
					{t('home2')}
				</h2>
				<h3 className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
					{t('home3')}
				</h3>
				<h4 className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
					{t('home4')}
				</h4>
				<div className="flex justify-center space-x-10 mb-10">
					<a
						href={t('candidatepath')}
						className="max-w-md px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
					>
						{t('home5')}
					</a>
					<a
						href={t('contactpath')}
						className="px-8 py-3 border border-ab text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
					>
						{t('home6')}
					</a>
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
