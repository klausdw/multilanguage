import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import enfermeira from '../public/assets/enfermeira.webp'
import { Facebook, Instagram, Whatsapp } from '@components/Icons'

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
					<a
						href="https://wa.me/+491736218918"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							className="w-8 h-8 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
						</svg>
					</a>
				</div>
				<div className="flex justify-end text-blue-600 -mb-10">
					<Facebook />
					<Instagram />
					<Whatsapp />
				</div>
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
					<span className="block">AB Connection</span>
				</h1>
				<div className="mt-4 grid grid-cols-1 lg:grid-cols-2">
					<Image
						src={enfermeira}
						alt="Enfermeira na Alemanha"
						objectFit="cover"
						priority
					/>
					<div className="px-0 pt-8 sm:px-8 lg:py-0">
						<h2 className="text-xl text-gray-500 sm:text-2xl md:text-2xl lg:mx-0">
							{t('home1')}
						</h2>
						<h3 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl md:mt-5 md:text-2xl lg:mx-0">
							{t('home2')}
						</h3>
						<h4 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl md:mt-5 md:text-2xl lg:mx-0">
							{t('home3')}
						</h4>
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
					</div>
				</div>
				<h5 className="mt-10 mb-40 px-8 xs:px-0 sm:px-0 sm:mb-20 sm:mt-6">
					{t('whats-app')}
				</h5>
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
