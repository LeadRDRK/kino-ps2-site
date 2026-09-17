<script lang="ts">
    import Heading from "$lib/components/Heading.svelte";
    import { formatPostDate } from "$lib/utils";
    import type { PageData } from "./$types";

    const { data }: {
        data: PageData
    } = $props();

</script>

<Heading>
    {data.title}
    {#snippet subtitle()}
        {formatPostDate(data.metadata.date)}
    {/snippet}
</Heading>

<div class="content">
    <data.content />
</div>

<style>
    .content :global(p img) {
        width: 420px;
        max-width: 100%;
        display: block;
        margin: 0 auto;
        margin-block: 1em;
    }
</style>