import React, { useRef } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Router from 'next/router'
import Swal from 'sweetalert2'
import ReCAPTCHA from 'react-google-recaptcha'
import FooterContact from '@components/FooterContact'

const Contact: React.FC<{ event: React.MouseEvent<HTMLElement, MouseEvent> }> = ({
	event,
}) => {
	const { t } = useTranslation('contact')
	const captcha = useRef<ReCAPTCHA>(null)
	const onCaptcha = () => {
		captcha.current?.getValue() ? true : false
		console.log(captcha.current?.getValue())
	}
	const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const formData = {}
		if (captcha.current?.getValue()) {
			console.log('Nao é Robo')
			// Array.from(event.currentTarget.elements).forEach((field) => {
			// 	!(field.name ? formData[field.name] : field.value)
			// })
			// fetch('/api/mail', {
			// 	method: 'POST',
			// 	body: JSON.stringify(formData),
			// })
			console.log(formData)
			Swal.fire('Enviado !', 'Seu E-Mail foi enviado com sucesso !', 'success')
			setTimeout(() => {
				Router.push('/')
			}, 3000)
		} else {
			Swal.fire('Erro !', 'Preencha todos campos !', 'error')
			console.log('aceite o captcha')
		}
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
			<div className="px-8 py-4 sm:text-justify lg:text-left">
				<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
					<span className="block">{t('contact')}</span>
				</h1>
			</div>
			<div className="flex justify-center rounded p-6">
				<div className="w-full max-w-sm rounded">
					<form
						className="bg-white rounded shadow px-8 pt-6 pb-8 border"
						method="post"
						onSubmit={handleOnSubmit}
					>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="nome"
							>
								{t('contact1')}
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 "
								type="text"
								name="nome"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								{t('contact2')}
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 "
								type="email"
								name="email"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="mensagem"
							>
								{t('contact3')}
							</label>
							<textarea
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600 "
								name="mensagem"
							/>
						</div>
						<div className="my-auto">
							<ReCAPTCHA
								ref={captcha}
								sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
								onChange={onCaptcha}
							/>
						</div>
						<button
							type="submit"
							className="rounded bg-blue-600 w-full mt-5 p-2 text-white uppercase hover:bg-blue-900"
						>
							{t('contact4')}
						</button>
					</form>
				</div>
			</div>
			<FooterContact />
		</>
	)
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'contact',
			'navbar',
			'footer',
		])),
	},
})

export default Contact