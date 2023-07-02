import FooterInline from '@components/FooterInline'
import Header from '@components/Header'
import { getAllPosts } from 'lib/blog-api'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	posts: {
		title: string
		description: string
		image: string
		slug: string
	}[]
}
const Blog: React.FC<Props> = ({ posts }) => {
	const { t } = useTranslation('navbar')

	return (
		<>
			<Header
				title={t('blognav')}
				keywords={t('blogkey')}
				description={t('blogdesc')}
				path={t('blogpath')}
			/>
			<main className="relative mx-auto max-w-7xl px-4 py-8">
				<h1 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl after:absolute after:w-24 after:h-1 after:ml-0 after:bg-blue-600">
					<span className="block">Blog</span>
				</h1>
				{posts.map(({ title, description, image, slug }) => (
					<Link href={`/blog/${slug}`} prefetch={false} key={slug}>
						<a>
							<article className="grid grid-cols-4 items-center border-b-2 py-2">
								<div className="relative h-32 w-full">
									<Image
										src={image}
										className="rounded-md"
										alt="asdf"
										layout="fill"
										objectFit="contain"
									/>
								</div>
								<div className="col-span-3">
									<h2 className="text-2xl mb-2 font-medium">{title}</h2>
									<h3 className="text-base">{description}</h3>
								</div>
							</article>
						</a>
					</Link>
				))}
			</main>
			<FooterInline />
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const posts = getAllPosts()
	const sortedArticles = posts
		.map((article) => article)
		.sort((a, b) => (a.date > b.date ? -1 : 1))

	return {
		props: {
			posts: sortedArticles,
			...(await serverSideTranslations(locale as string, [
				'about',
				'navbar',
				'footer',
			])),
		},
	}
}

export default Blog
