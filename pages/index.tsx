import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import enfermeira from '../public/assets/enfermeira.webp'
import { Facebook, Instagram, Whatsapp, WhatsappChat } from '@components/Icons'

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
			<main className="relative mx-auto max-w-7xl px-4 py-8">
				<div className="fixed right-1 p-2 bottom-1 mr-2 mb-40 lg:mr-10 sm:mb-20 bg-whats-app border-4 border-whats-app rounded-full text-white z-10">
					<WhatsappChat />
				</div>
				<div className="flex items-center justify-end text-blue-600 -mb-8 md:-mb-10">
					<Facebook />
					<Instagram />
					<Whatsapp />
				</div>
				<h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
					<span className="block">AB Connection</span>
				</h1>
				<div className="mt-4 grid grid-cols-1 lg:grid-cols-2">
					<div className="relative h-52 w-full sm:h-96">
						<Image
							src={enfermeira}
							layout="fill"
							alt="Enfermeira na Alemanha"
							objectFit="contain"
							priority
						/>
					</div>
					<div className="space-y-4 px-0 pt-2 sm:px-8 sm:pt-2 lg:pt-6 lg:py-0 xl:pt-0 text-xl text-black sm:text-gray-500 sm:text-2xl md:text-2xl lg:mx-0">
						<h2>{t('home1')}</h2>
						<h3>{t('home2')}</h3>
						<h4>{t('home3')}</h4>
						<div className="grid grid-cols-1 sm:grid-cols-2 mt-2 space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
							<a
								href={t('candidatepath')}
								className="flex justify-center items-center p-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 md:text-lg sm:p-4"
							>
								{t('home5')}
							</a>
							<a
								href={t('contactpath')}
								className="flex justify-center items-center p-4 border border-ab text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-200 md:text-lg sm:p-4"
							>
								{t('home6')}
							</a>
						</div>
						<h5 className="mt-10 mb-0 px-8 xs:px-0 sm:px-0 sm:mb-20 sm:mt-6">
							{t('whats-app')}
						</h5>
					</div>
				</div>
			</main>
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
