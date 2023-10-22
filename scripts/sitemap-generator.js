const fs = require('fs')
const globby = require('globby')
function addPage(page) {
	const path = page.replace('pages', '').replace('.tsx', '').replace('.mdx', '')
	const route = path === '/index' ? '' : path
	return `<url>
				<loc>${`https://abconnection.de${route}`}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.9</priority>
			</url>`
}
function addGermanPage(page) {
	const path = page.replace('pages', '').replace('.tsx', '').replace('.mdx', '')
	const route = path === '/index' ? '' : path
	return ` <url>
				<loc>${`https://abconnection.de/de${route}`}</loc>
				<lastmod>${new Date().toISOString()}</lastmod>
				<changefreq>daily</changefreq>
				<priority>0.9</priority>
			</url>`
}

async function generateSitemap() {
	// excludes Nextjs files and API routes.
	const pages = await globby(['pages/**/*{.tsx,.mdx}', '!pages/_*.tsx', '!pages/api'])
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${pages.map(addPage).join('\n')}
			${pages.map(addGermanPage).join('\n')}
		</urlset>`
	fs.writeFileSync('public/sitemap.xml', sitemap)
}
// generateSitemap()
