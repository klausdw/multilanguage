import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
	ChartBarIcon,
	IdentificationIcon,
	MailIcon,
	MenuIcon,
	NewspaperIcon,
	UserGroupIcon,
	XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import Flage, { GermanFlage, PortugueseFlage } from './Flage'
import { Logo } from './Logo'

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

const NavHeader: React.FC = () => {
	const { t } = useTranslation('navbar')
	const candidate = [
		{
			name: t('candidateway'),
			description: t('candidatenav'),
			href: t('candidatehref'),
			as: t('candidatepath'),
			icon: IdentificationIcon,
		},
		{
			name: t('faq'),
			description: t('faqnav'),
			href: t('faqhref'),
			as: t('faqpath'),
			icon: NewspaperIcon,
		},
		{
			name: t('blog1'),
			description: t('blognav'),
			href: t('candidatehref'),
			as: t('blogpath'),
			icon: NewspaperIcon,
		},
	]
	const service = [
		{
			name: t('services1'),
			description: t('servicesnav'),
			href: t('serviceshref'),
			as: t('servicespath'),
			icon: ChartBarIcon,
		},
		{
			name: t('about1'),
			description: t('aboutnav'),
			href: t('abouthref'),
			as: t('aboutpath'),
			icon: UserGroupIcon,
		},
	]
	return (
		<Popover className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<Logo />
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md border border-blue-600 rounded p-2 inline-flex items-center justify-center text-blue-600 focus-focus:none">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden md:flex space-x-10">
						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-blue-800' : 'text-blue-600',
											'group bg-white rounded-md inline-flex items-center text-base text-lg font-medium hover:text-blue-900',
										)}
									>
										<span>{t('candidate1')}</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-blue-800' : 'text-blue-700',
												'ml-2 h-5 w-5 group-hover:text-blue-600',
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
											<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{candidate.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															as={item.as}
															prefetch={false}
														>
															<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
																<item.icon
																	className="flex-shrink-0 h-6 w-6 text-blue-700"
																	aria-hidden="true"
																/>
																<div className="ml-4">
																	<p className="text-base font-medium text-blue-600">
																		{item.name}
																	</p>
																	<p className="mt-1 text-sm text-gray-500">
																		{item.description}
																	</p>
																</div>
															</a>
														</Link>
													))}
												</div>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
						<Popover className="relative">
							{({ open }) => (
								<>
									<Popover.Button
										className={classNames(
											open ? 'text-blue-800' : 'text-blue-600',
											'group bg-white rounded-md inline-flex items-center text-base text-lg font-medium hover:text-blue-900 focus:outline-none',
										)}
									>
										<span>{t('services1')}</span>
										<ChevronDownIcon
											className={classNames(
												open ? 'text-blue-800' : 'text-blue-700',
												'ml-2 h-5 w-5 group-hover:text-blue-600',
											)}
											aria-hidden="true"
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter="transition ease-out duration-200"
										enterFrom="opacity-0 translate-y-1"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in duration-150"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 translate-y-1"
									>
										<Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
											<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
												<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
													{service.map((item) => (
														<Link
															key={item.name}
															href={item.href}
															as={item.as}
															prefetch={false}
														>
															<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
																<item.icon
																	className="flex-shrink-0 h-6 w-6 text-blue-700"
																	aria-hidden="true"
																/>
																<div className="ml-4">
																	<p className="text-base font-medium text-blue-600">
																		{item.name}
																	</p>
																	<p className="mt-1 text-sm text-gray-500">
																		{item.description}
																	</p>
																</div>
															</a>
														</Link>
													))}
												</div>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
						<Link
							href={t('contacthref')}
							as={t('contactpath')}
							prefetch={false}
						>
							<a className="text-base text-lg font-medium text-blue-600 hover:text-blue-900">
								{t('contact1')}
							</a>
						</Link>
						<Flage />
					</Popover.Group>
					{/* SignIn 
					<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
						<a
							href="#"
							className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
						>
							{t('contact')}
						</a>
					</div> */}
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<Logo />
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 mr-4 inline-flex items-center justify-center text-blue-700 border border-blue-600 hover:text-blue-800 hover:bg-blue-100">
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{candidate.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											as={item.as}
											prefetch={false}
										>
											<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
												<item.icon
													className="flex-shrink-0 h-6 w-6 text-blue-700"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										</Link>
									))}
								</nav>
							</div>
							<div className="mt-6 py-6 border-t border-b border-transparen">
								<nav className="grid gap-y-8">
									{service.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											prefetch={false}
										>
											<a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
												<item.icon
													className="flex-shrink-0 h-6 w-6 text-blue-700"
													aria-hidden="true"
												/>
												<span className="ml-3 text-base font-medium text-gray-900">
													{item.name}
												</span>
											</a>
										</Link>
									))}
								</nav>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									<a
										href={t('contacthref')}
										className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
									>
										<MailIcon
											className="flex-shrink-0 h-6 w-6 text-blue-700"
											aria-hidden="true"
										/>
										<span className="ml-3 text-base font-medium text-gray-900">
											{t('contact1')}
										</span>
									</a>
									<div className="flex space-x-10 -mt-5">
										<PortugueseFlage />
										<GermanFlage />
									</div>
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<a
								href="#"
								className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
							>
								{t('signin1')}
							</a>
							<p className="mt-6 text-center text-base font-medium text-gray-500">
								Existing customer?{' '}
								<a href="#" className="text-blue-600 hover:text-blue-500">
									Sign in
								</a>
							</p>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

export default NavHeader
