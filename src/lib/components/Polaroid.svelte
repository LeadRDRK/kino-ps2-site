<script lang="ts">
    import type { HTMLImgAttributes } from "svelte/elements";
    import tapeImg from "$lib/assets/tape2.webp";

    const props: HTMLImgAttributes = $props();
</script>

<div class="wrapper">
    <img class="tape" src={tapeImg} alt="">
    <img class="photo" {...props}>
</div>

<style>
    .wrapper {
        position: relative;
        margin: 0 auto;
        margin-block: 4em;
        display: table;
    }

    .photo {
        width: 448px;
        max-width: 100%;
        display: block;
        border: 1em solid #fff;
        border-bottom: 5em solid #fff;
        box-shadow: 0 10px 10px rgba(0,0,0,0.3);
        box-sizing: border-box;
    }

    .tape {
        position: absolute;
        top: 1.2em;
        left: 50%;
        transform: translate(-50%, -100%);
        height: 3em;
        user-select: none;
        pointer-events: none;
        rotate: -1deg;
    }
</style>