import FooterInline from '@components/FooterInline'
import Header from '@components/Header'
import { getAllPosts, getPostBySlug } from 'lib/blog-api'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import md from 'markdown-it'

type Props = {
	post: {
		frontmatter: {
			title: string
			description: string
			image: string
			slug: string
			locale: string
			metaDescription: string
			keywords: string
		}
		content: string
	}
	url: {
		slug: string
	}
}
const BlogPage: React.FC<Props> = (props) => {
	const {
		post: { frontmatter, content },
		url,
	} = props

	return (
		<>
			<Header
				title={frontmatter.title}
				keywords={frontmatter.keywords}
				description={frontmatter.metaDescription}
				path={`/blog/${url.slug}`}
			/>
			<main className="relative mx-auto max-w-7xl px-4 py-8 mb-10">
				<h1 className="text-4xl px-6">{frontmatter.title}</h1>
				<h2 className="text-lg px-6 mt-2 mb-6">{frontmatter.description}</h2>
				<div className="px-6">
					<div
						className="prose max-w-none"
						dangerouslySetInnerHTML={{ __html: md().render(content) }}
					/>
				</div>
			</main>
			<FooterInline />
		</>
	)
}

export const getStaticPaths: GetStaticPaths = () => {
	const posts = getAllPosts()

	return {
		paths: posts.map((post) => {
			return { params: { slug: post.slug } }
		}),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
	const post = getPostBySlug(params?.slug as string)

	return {
		props: {
			post,
			url: params,
			...(await serverSideTranslations(locale as string, [
				'about',
				'navbar',
				'footer',
			])),
		},
	}
}

export default BlogPage
