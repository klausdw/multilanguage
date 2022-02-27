import { useTranslation } from 'next-i18next'

export const Logo: React.FC = () => {
	const { t } = useTranslation('navbar')
	return (
		<a href={t('logohref')} title="Logo">
			<span className="sr-only">AB Connection</span>
			<span>
				<picture>
					<source srcSet="/assets/logo.svg" type="image/svg" />
					<img
						src="/assets/logo.svg"
						alt="AB-Connection"
						loading="lazy"
						width="33%"
						height="33%"
					/>
				</picture>
			</span>
		</a>
	)
}
