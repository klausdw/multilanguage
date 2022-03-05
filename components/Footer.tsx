import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Facebook, Instagram, Whatsapp } from './Icons'

const Footer: React.FC = () => {
	const { t } = useTranslation('footer')
	const footer = [
		{
			name: t('copyright'),
			href: '/copyright',
			rel: 'nofollow',
		},
		{
			name: t('privacy'),
			href: '/privacy',
			rel: 'nofollow',
		},
		{
			name: t('abconnection'),
			href: '/',
			rel: 'nofollow',
		},
	]
	return (
		<footer className="w-full py-6 px-5 space-y-6 bg-blue-600">
			<div className="grid grid-cols-1 gap-y-2 sm:grid-cols-4">
				<div className="flex justify-center text-white">
					<Whatsapp />
					<Facebook />
					<Instagram />
				</div>
				{footer.map((item) => (
					<Link key={item.name} href={item.href} prefetch={false}>
						<a
							rel={item.rel}
							className="flex justify-center items-center text-base font-medium text-white hover:text-gray-400"
						>
							{item.name}
						</a>
					</Link>
				))}
			</div>
		</footer>
	)
}

export default Footer