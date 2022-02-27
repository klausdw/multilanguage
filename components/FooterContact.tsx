import { Trans, useTranslation } from 'next-i18next'

const FooterContact = () => {
	const { t } = useTranslation('contact')
	return (
		<div className="mx-6 mt-6 border-2 border-blue-200 shadow rounded">
			<div className="flex p-4 mb-8 justify-center">
				<p className="mr-10">logo</p>
				<Trans
					i18nKey="contact5"
					t={t}
					components={{
						strong: <a href={t('contact6')} className="text-blue-600"></a>,
					}}
				/>
			</div>
			<div className="flex">
				<p>logo123</p>
				<Trans
					i18nKey="contact7"
					t={t}
					components={{
						strong: <a href={t('contact8')} className="text-blue-600"></a>,
					}}
				/>
			</div>
		</div>
	)
}

export default FooterContact
