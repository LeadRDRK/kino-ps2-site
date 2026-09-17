<script lang="ts">
    import type { PostMetadata } from "$lib/types";
    import Post from "./Post.svelte";

    const { posts }: {
        posts: {
            slug: string,
            metadata: PostMetadata
        }[]
    } = $props();

</script>

<div class="post-list">
    {#each posts as { slug, metadata }}
        <Post {slug} {...metadata} />
    {/each}
</div>

<style>
    .post-list {
        margin-bottom: 16px;
    }
</style>