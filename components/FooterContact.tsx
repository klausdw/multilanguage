import { Trans, useTranslation } from 'next-i18next'
import { Facebook, Whatsapp, Location } from './Icons'

const FooterContact = () => {
	const { t } = useTranslation('contact')
	return (
		<div className="mx-auto max-w-7xl">
			<div className="p-4 bg-blue-600 shadow rounded sm:mx-10">
				<div className="flex flex-wrap mx-auto py-4">
					<Facebook />
					<Trans
						i18nKey="contact5"
						t={t}
						components={{
							strong: (
								<a
									href={t('contact6')}
									className="my-auto text-white hover:text-green-400"
								></a>
							),
						}}
					/>
				</div>
				<div className="flex flex-wrap py-4">
					<Whatsapp />
					<Trans
						i18nKey="contact7"
						t={t}
						components={{
							strong: (
								<a
									href={t('contact8')}
									className="my-auto text-white hover:text-green-400"
								></a>
							),
						}}
					/>
				</div>
				<div className="flex flex-wrap py-4">
					<Location />
					<Trans
						i18nKey="contact9"
						t={t}
						components={{
							strong: (
								<a
									href={t('contact9')}
									className="my-auto text-white hover:text-green-400"
								></a>
							),
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default FooterContact
