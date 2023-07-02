import fs from 'fs';
import matter from "gray-matter";

type PostItems = {
    [key: string]: string
}


export const getPostBySlug = (slug: string) => {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        frontmatter,
        content
    }
}

export const getAllPosts = (): PostItems[] => {
    const files = fs.readdirSync('./posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const { frontmatter } = getPostBySlug(slug);

        return {
            slug,
            ...frontmatter,
        };
    })

    return posts;
}

