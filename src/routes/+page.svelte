<script>
    import Heading from "$lib/components/Heading.svelte";
    import kinoHermesImg from "$lib/assets/kino-hermes.png";

</script>

<Heading>
    Welcome, Traveler
    {#snippet subtitle()}
        Land of Introductions
    {/snippet}
</Heading>

<div class="image-container">
    <img src={kinoHermesImg} alt="">
</div>

<p>
    Welcome to the home page of the Kino no Tabi PS2 translation project. Our mission is to translate the
    Kino no Tabi visual novels released for the PS2.
</p>

<p>
    We're currently working on the first game (キノの旅 -the Beautiful World-), so there's not much
    to show yet. Check out our blog for the occasional progress updates.
</p>

<p>
    Enjoy your stay here.<br>
    <i>- The Webmaster</i>
</p>

<p>
    <i>Last updated: {new Date(__BUILD_DATE__).toLocaleString("en-US")}</i>
</p>

<div style="clear: both;"></div>

<style>
    .image-container {
        display: inline-flex;
        float: right;
        margin-bottom: 1em;
    }

    @media (max-width: 720px) {
        .image-container {
            width: 100%;
            float: none;
            justify-content: center;
        }
    }
</style>