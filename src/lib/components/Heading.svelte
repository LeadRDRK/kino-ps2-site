<script lang="ts">
    import type { Snippet } from "svelte";

    const { children, subtitle }: {
        children: Snippet,
        subtitle?: Snippet
    } = $props();
</script>

<div class="top">━━━━━ ❖ ━━━━━</div>
<h1>
    {@render children()}
</h1>
{#if subtitle}
    <div class="subtitle">— {@render subtitle()} —</div>
{/if}
<div class="bottom">━━━━━ ❖ ━━━━━</div>

<style>
    h1, div {
        text-align: center;
        color: #1f4c3a;
    }

    h1 {
        font-size: 1.7em;
        margin-block: 0.4rem;
    }

    .top, .bottom, .subtitle {
        font-size: 0.7em;
        font-weight: bold;
    }

    .top, .bottom {
        user-select: none;
    }

    .bottom {
        margin-bottom: 16px;
    }

    .subtitle {
        margin-block-end: 0.4rem;
    }
</style>