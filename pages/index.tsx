import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as gtag from '../lib/gtag'

const Home: NextPage = () => {
	const { t } = useTranslation()
	const addTest = () => {
		gtag.event({
			action: 'go_to_test',
			category: 'home',
			label: 'Go to test page',
			value: 'Test Page',
		})
	}
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
			<button onClick={() => addTest()}>Test</button>
			<div className="relative bg-white overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<picture>
							<source srcSet="/assets/enfermeira.webp" type="image/webp" />
							<source srcSet="/assets/enfermeira.jpg" type="image/jpeg" />
							<img
								className="h-full w-full object-cover object-center"
								src="/assets/enfermeira.jpg"
								alt=""
							/>
						</picture>
					</div>
					<div className="relative pt-8 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32">
						<main className="mx-auto max-w-7xl px-4 sm:px-6">
							<div className="sm:text-justify lg:text-left w-full">
								<h1 className="mt-3 text-xl text-gray-500 sm:mt-5 sm:text-2xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
									<span className="block xl:inline md:inline">
										{t('home1')}
									</span>
									<span className="mt-2 block text-blue-600 xl:inline md:inline">
										{' '}
										{t('home2')}
									</span>
								</h1>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									{t('home3')}
								</p>
								<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
									{t('home4')}
								</p>
								<div className="sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<a
											href={t('candidatepath')}
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
										>
											{t('home5')}
										</a>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3">
										<a
											href={t('contactpath')}
											className="w-full flex items-center justify-center px-8 py-3 border border-ab text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
										>
											{t('home6')}
										</a>
									</div>
								</div>
							</div>
						</main>
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
