import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export const Logo: React.FC = () => {
	const { t } = useTranslation('navbar')
	return (
		<div className="flex justify-start relative h-10 w-10 lg:w-0 lg:flex-1">
			<a href={t('logohref')} title="AB Connection">
				<span className="sr-only">AB Connection</span>
				<Image
					src="/assets/logo.svg"
					alt="AB-Connection"
					objectFit="contain"
					objectPosition="left"
					loading="lazy"
					layout="fill"
				/>
			</a>
		</div>
	)
}
