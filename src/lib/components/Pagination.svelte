<script lang="ts">
    import MdiArrowLeftThin from '~icons/mdi/arrow-left-thin';
    import MdiArrowRightThin from '~icons/mdi/arrow-right-thin';

    const { pageNum, hasNextPage, resolvePage }: {
        pageNum: number,
        hasNextPage: boolean,
        resolvePage: (page: number) => string
    } = $props();

</script>

<div class="pagination">
    {#if pageNum > 1}
        <a class="previous" href={resolvePage(pageNum - 1)}>
            <div class="overlay"></div>
            <MdiArrowLeftThin /> Previous
        </a>
    {:else}
        <div></div>
    {/if}
    {#if hasNextPage}
        <a class="next" href={resolvePage(pageNum + 1)}>
            <div class="overlay"></div>
            Next <MdiArrowRightThin />
        </a>
    {/if}
</div>

<style>
    .pagination {
        font-weight: bold;
        position: relative;
        left: -20px;
        width: calc(100% + 40px);
        margin: 2em 0 1em;
        display: flex;
        justify-content: space-between;
    }

    .pagination > a {
        color: #fff;
        font-size: 1.2em;
        text-decoration: none;
        padding: 0.3em 1.25em;
        font-family: var(--font-sans-cond);
        transition: 0.2s;
        position: relative;
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.25));
    }

    .pagination > a::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #008942;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .pagination > a :global(svg) {
        position: relative;
        top: 0.2em;
    }

    .pagination > a > .overlay {
        position: absolute;
        bottom: -6.5px;
        border-top: 7px solid #005c2c;
        z-index: -2;
    }

    .pagination > .next {
        padding-left: 2em;
        left: 8px;
    }

    .pagination > .next:hover {
        padding-right: 1.5em;
    }

    .pagination > .next::before {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 16px 50%);
    }

    .pagination > .next > .overlay {
        right: 0;
        border-right: 8px solid transparent;
    }

    .pagination > .previous {
        padding-right: 2em;
        left: -8px;
    }

    .pagination > .previous:hover {
        padding-left: 1.5em;
    }

    .pagination > .previous::before {
        clip-path: polygon(0% 0%, 100% 0%, calc(100% - 16px) 50%, 100% 100%, 0% 100%);
    }

    .pagination > .previous > .overlay {
        left: 0;
        border-left: 8px solid transparent;
    }
</style>