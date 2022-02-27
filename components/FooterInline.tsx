import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Whatsapp, Facebook, Instagram } from './Icons'

const FooterInline: React.FC = () => {
	return (
		<footer className="w-full py-6 px-5 space-y-6 bg-blue-600">
			<div className="flex justify-center text-white">
				<Whatsapp />
				<Facebook />
				<Instagram />
			</div>
		</footer>
	)
}

export default FooterInline
