import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export const GermanFlage = () => (
	<a href="/de" title="Deutsch">
		<picture className="flex items-center justify-center text-blue-700 mt-4">
			<source
				srcSet="/assets/flags/deutschland-deutsch-de.webp"
				type="image/webp"
			/>
			<source srcSet="/assets/flags/deutschland-deutsch-de.png" type="image/png" />
			<img
				src="/assets/flags/deutschland-deutsch-de.png"
				alt="deutsch"
				loading="lazy"
			/>
			<span className="ml-3">DE</span>
		</picture>
	</a>
)
export const PortugueseFlage = () => (
	<a href="/" title="Português">
		<picture className="flex items-center justify-center text-blue-700 mt-4">
			<source
				srcSet="/assets/flags/brasil-portugues-pt-br.webp"
				type="image/webp"
			/>
			<source srcSet="/assets/flags/brasil-portugues-pt-br.png" type="image/png" />
			<img
				alt="portugues"
				loading="lazy"
				src="/assets/flags/brasil-portugues-pt-br.png"
			/>
			<span className="ml-3">PT</span>
		</picture>
	</a>
)

const Flage: React.FC = () => {
	const { t } = useTranslation('navbar')
	return (
		<>
			<Popover className="relative">
				{({ open }) => (
					<>
						<Popover.Button
							className={classNames(
								open ? 'text-gray-900' : 'text-gray-500',
								'mt-0.5 group w-14 rounded-md inline-flex items-center',
							)}
						>
							<picture>
								<source srcSet={t('flage')} type="image/png" />
								<img
									src={t('flage')}
									alt={t('flageAlt')}
									loading="lazy"
									width={24}
									height={24}
								/>
							</picture>
							<ChevronDownIcon
								className={classNames(
									open ? 'text-blue-600' : 'text-blue-600',
									'ml-1 h-5 w-5',
								)}
								aria-hidden="true"
							/>
						</Popover.Button>
						<Transition
							show={open}
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<Popover.Panel
								static
								className="absolute z-10 -ml-20 mt-3 transform px-2 w-auto max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
							>
								<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white ml-12">
									<div className="relative bg-white px-8 py-4 -mt-4">
										<GermanFlage />
										<PortugueseFlage />
									</div>
								</div>
							</Popover.Panel>
						</Transition>
					</>
				)}
			</Popover>
		</>
	)
}

export default Flage
