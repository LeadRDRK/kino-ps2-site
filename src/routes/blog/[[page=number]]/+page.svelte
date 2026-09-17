<script lang="ts">
    import Heading from "$lib/components/Heading.svelte";
    import type { PageData } from "./$types";
    import Pagination from "$lib/components/Pagination.svelte";
    import PostList from "$lib/components/PostList.svelte";
    import { resolve } from "$app/paths";

    const { data }: {
        data: PageData
    } = $props();

</script>

<Heading>
    Blog
    {#snippet subtitle()}
        Land of Posts
    {/snippet}
</Heading>

<PostList posts={data.posts} />

<Pagination
    pageNum={data.pageNum}
    hasNextPage={data.hasNextPage}
    resolvePage={page => resolve("/blog/[[page=number]]", { page: String(page) })}
/>