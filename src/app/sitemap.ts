import { getPosts } from '@/app/utils/utils'
import { baseURL } from '@/app/resources'
import { routing } from '@/i18n/routing'

export default async function sitemap() {

    const locales = routing.locales;

    let blogs = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]).map((post) => ({
            url: `${baseURL}/${locale}/blog/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let projects = locales.flatMap((locale) => 
        getPosts(['src', 'app', '[locale]', 'portfolio', 'projects', locale]).map((post) => ({
            url: `${baseURL}/${locale}/portfolio/${post.slug}`,
            lastModified: post.metadata.publishedAt,
        }))
    );

    let routes = locales.flatMap((locale)=> 
        ['', '/blog', '/portfolio'].map((route) => ({
            url: `${baseURL}/${locale}${route}`,
            lastModified: new Date().toISOString().split('T')[0],
        }))
    );

    return [...routes, ...blogs, ...projects]
}