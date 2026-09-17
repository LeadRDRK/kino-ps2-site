import type { PostMetadata } from '$lib/types.js';
import { error } from '@sveltejs/kit';

const PAGE_LENGTH = 5;

const postModules = Object.entries(
    import.meta.glob('$lib/posts/*.svx', {
        eager: true,
        import: 'metadata'
    })
);
const pageCount = Math.ceil(postModules.length / PAGE_LENGTH);

export async function entries() {
    return Array(pageCount).keys().map(i => ({
        page: String(i + 1)
    })).toArray();
}

export async function load({ params }) {
    const pageNum = params.page === undefined ? 1 : Number(params.page);
    if (isNaN(pageNum) || pageNum < 1) {
        throw error(404, "Page not found");
    }

    const pageStart = (pageNum - 1) * PAGE_LENGTH;
    const pageEnd = pageStart + PAGE_LENGTH;
    if (pageStart >= postModules.length) {
        throw error(404, "Page not found");
    }

    const pageEntries = postModules.slice(pageStart, pageStart + PAGE_LENGTH);
    const posts = [];
    for (const [path, metadata] of pageEntries) {
        posts.push({
            slug: path.split('/').pop()!.replace('.svx', ''),
            metadata: metadata as PostMetadata
        });
    }
    posts.reverse();

    return {
        title: "Blog",
        posts,
        pageNum,
        hasNextPage: pageEnd < postModules.length
    }
}