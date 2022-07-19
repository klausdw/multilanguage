import React, { useRef, useState } from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@components/Header'
import Router from 'next/router'
import Swal from 'sweetalert2'
import ReCAPTCHA from 'react-google-recaptcha'
import FooterContact from '@components/FooterContact'

const Contact: React.FC = () => {
	const { t } = useTranslation('contact')

	const captcha = useRef<ReCAPTCHA>(null)
	const [captchaValido, setCaptchaValido] = useState<Boolean>()

	const onCaptcha = () => {
		if (captcha.current?.getValue()) return setCaptchaValido(true)
	}
	const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (captcha.current?.getValue()) {
			const formData: any = {}
			Array.from(event.currentTarget.elements).forEach((field: any) => {
				!(field.name ? (formData[field.name] = field.value) : field.value)
			})
			setCaptchaValido(true)
			fetch('/api/mail', {
				method: 'POST',
				body: JSON.stringify(formData),
			})
			Swal.fire('Enviado !', 'Seu E-Mail foi enviado com sucesso !', 'success')
			setTimeout(() => {
				Router.push('/sucess')
			}, 3000)
		} else {
			setCaptchaValido(false)
			Swal.fire('Erro !', 'Preencha todos campos !', 'error')
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
			<main className="mx-auto max-w-7xl px-4 py-8 pt-8">
				<div className="sm:px-6 sm:text-justify lg:text-left">
					<h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
						<span className="block"> {t('contact')} </span>
					</h1>
				</div>
				<div className="flex mx-auto justify-center rounded mt-6 sm:px-6">
					<form
						className="w-full bg-white rounded shadow px-4 pt-4 pb-6 sm:px-8 border"
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
								required
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
								required
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
								required
							/>
						</div>
						<div>
							<ReCAPTCHA
								ref={captcha}
								sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
								onChange={onCaptcha}
							/>
							{captchaValido === false && (
								<div className="mt-4 bg-red-600 text-white text-center rounded-md py-2">
									Por favor aceite o captcha
								</div>
							)}
						</div>
						<button
							type="submit"
							className="rounded bg-blue-600 w-full mt-5 p-2 text-white uppercase hover:bg-blue-900"
						>
							{t('contact4')}
						</button>
					</form>
				</div>
			</main>
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
