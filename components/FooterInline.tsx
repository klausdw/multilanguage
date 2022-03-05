import { Facebook, Instagram, Whatsapp } from './Icons'

const FooterInline: React.FC = () => {
	return (
		<footer className="w-full py-6 px-5 space-y-6 bg-blue-600">
			<div className="flex justify-center items-center text-white">
				<Facebook />
				<Instagram />
				<Whatsapp />
			</div>
		</footer>
	)
}

export default FooterInline
