import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import ptBr from '../public/assets/flags/brasil.png'
import deDe from '../public/assets/flags/deutschland.png'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export const GermanFlage = () => (
	<div className="relative h-6 w-6 flex items-center justify-center text-blue-700 mt-2">
		<a href="/de" title="Deutsch">
			<Image src={deDe} layout="fill" alt="PT-BR" objectFit="contain" />
		</a>
	</div>
)
export const PortugueseFlage = () => {
	return (
		<div className="relative h-6 w-6 flex items-center justify-center text-blue-700 mt-2">
			<a href="/" title="Português">
				<Image src={ptBr} layout="fill" alt="PT-BR" objectFit="contain" />
			</a>
		</div>
	)
}

const Flage: React.FC = () => {
	const { t } = useTranslation('navbar')
	return (
		<>
			<Popover className="relative my-auto">
				{({ open }) => (
					<>
						<Popover.Button className="flex">
							<div className="relative h-5 w-5 my-auto">
								<Image
									src={t('flage')}
									alt={t('flageAlt')}
									layout="fill"
									objectFit="cover"
									className="rounded-md max-w-full h-auto align-middle border-none"
								/>
							</div>
							<ChevronDownIcon
								className={classNames(
									open ? 'text-blue-600' : 'text-blue-600',
									'h-6 w-6 my-auto',
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
								<div className="ml-20 lg:ml-0 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white">
									<div className="relative bg-white px-4">
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
