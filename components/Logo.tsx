import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export const Logo: React.FC = () => {
	const { t } = useTranslation('navbar')
	return (
		<a href={t('logohref')} title="AB Connection">
			<span className="sr-only">AB Connection</span>
			<Image
				src="/assets/logo.svg"
				alt="AB-Connection"
				loading="lazy"
				width={50}
				height={50}
			/>
		</a>
	)
}
