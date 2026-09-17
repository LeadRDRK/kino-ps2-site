<script lang="ts">
    import { resolve } from "$app/paths";
    import { formatPostDate } from "$lib/utils";
    import defaultThumbnail from "$lib/assets/default-thumbnail.png";

    const { slug, thumbnail, title, date, summary }: {
        slug: string,
        thumbnail?: string,
        title: string,
        date: string,
        summary: string
    } = $props();

</script>

<div class="post">
    <div class="thumbnail">
        <div class="wrapper">
            <img src={thumbnail ?? defaultThumbnail} alt="">
        </div>
    </div>
    <div class="info">
        <h3>
            <a href={resolve("/blog/[slug]", { slug })}>{title}</a>
        </h3>
        <div class="date">{formatPostDate(date)}</div>
        <div class="summary">{summary}</div>
    </div>
</div>

<style>
    .post {
        display: flex;
        text-decoration: none;
        background: url("$lib/assets/paper.png") repeat-y;
        background-size: 100% auto;
        padding: 0.5em 1.3em;
        margin-top: 0.8em;
        filter: drop-shadow(5px 5px 3px rgba(0,0,0,0.2));
        position: relative;
    }

    .post > .info {
        margin: auto 0;
    }

    .post > .info > h3 {
        margin: 0;
    }

    .post > .info > h3 > a {
        text-decoration: underline;
        color: inherit;
    }

    .post > .info > .date {
        padding-bottom: 0.4em;
        border-bottom: 2px dashed rgb(0,0,0,0.2);
        margin-bottom: 0.4em;
    }

    .post > .thumbnail {
        margin-right: 0.65em;
        flex: 0 0 auto;
        width: 120px;
        height: 90px;
    }

    .post > .thumbnail > .wrapper {
        width: 100%;
        height: 100%;

        -webkit-mask-image: url("$lib/assets/paper-mask.png");
        -webkit-mask-size: cover;
        -webkit-mask-repeat: no-repeat;

        mask-image: url("$lib/assets/paper-mask.png");
        mask-size: cover;
        mask-repeat: no-repeat;
    }

    .post > .thumbnail > .wrapper > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 480px) {
        .post {
            margin-top: 192px;
        }

        .post > .thumbnail {
            position: absolute;
            left: 0;
            bottom: 100%;
            width: 100%;
            height: auto;
            margin-right: 0;
            padding-bottom: 12px;
            display: flex;
            justify-content: center;
        }

        .post > .thumbnail > .wrapper {
            width: 200px;
            height: 150px;
        }

        .post > .info {
            flex-grow: 1;
        }
    }
</style>