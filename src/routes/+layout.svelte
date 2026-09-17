<script lang="ts">
	import gameCover from '$lib/assets/game-cover.png';
	import logo from '$lib/assets/logo.svg';
	import bgImage from '$lib/assets/bg.jpg';
	import netscapeGif from '$lib/assets/netscape.gif';
	import ieGif from '$lib/assets/ie.gif';
	import psGif from '$lib/assets/playstation.gif';
	import html5Gif from '$lib/assets/html5.gif';
	import hermesGreen from '$lib/assets/hermes-green.png';
	import MdiHome from '~icons/mdi/home';
	import MdiController from '~icons/mdi/controller';
	import MdiTextBoxEdit from '~icons/mdi/text-box-edit';
	import MdiInformation from '~icons/mdi/information';
    import { page } from '$app/state';
	import '@fontsource-variable/oswald/wght.css';
	import '@fontsource-variable/noto-serif/wght.css';
	import '@fontsource-variable/noto-serif/wght-italic.css';
	import '@fontsource-variable/noto-serif-jp/wght.css';
	import './globals.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{page.data.title ?? page.error?.message} - Kino no Tabi PS2 Translation Project</title>
</svelte:head>

<div class="bg">
	<img src={bgImage} alt="">
</div>

<div class="root">
	<div class="container">
		<div class="main-wrapper">
			<div class="banner">
				<div class="banner-logo">
					<img src={logo} alt="" height="72">
				</div>
				<div class="banner-poster">
					<img src={gameCover} alt="">
					<div class="overlay"></div>
				</div>
			</div>

			<nav>
				<a href="/" class:active={page.route.id == "/"}>
					<MdiHome /> Home
				</a>
				<a href="/releases" class:active={page.route.id == "/releases"}>
					<MdiController /> Releases
				</a>
				<a href="/blog" class:active={page.route.id?.startsWith("/blog")}>
					<MdiTextBoxEdit /> Blog
				</a>
				<a href="/about" class:active={page.route.id == "/about"}>
					<MdiInformation /> About
				</a>
			</nav>

			<main>
				{@render children()}
			</main>
		</div>
	</div>
</div>

<div class="hermes">
	<img src={hermesGreen} height="42" alt="">
</div>

<footer>
	<small>
		<p>
			This is a non-commercial fan project. It is not created or endorsed by the original creator.
			Kino no Tabi is copyright © 2000-2026 Keiichi Sigsawa / ASCII Media Works.
		</p>
		<p>
			This page is <i>not</i> best viewed at 800x600 resolution.
			Don't even try to open this page in Netscape Navigator or Internet Explorer.
			They will explode instantly. I'm just putting these here for fun.
		</p>
		<p>
			<img src={netscapeGif} alt="">
			<img src={ieGif} alt="">
			<img src={psGif} alt="">
			<img src={html5Gif} alt="">
		</p>
	</small>
</footer>

<style>
	.bg {
		user-select: none;
		pointer-events: none;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}

	.bg > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.root {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.container {
		width: 100vw;
		max-width: 1000px;
	}

	.banner {
		width: 100%;
		display: flex;
		height: 150px;
		background-color: #fff;
		border-radius: 4px 4px 0 0;
		margin-bottom: -74px;
	}

	.banner-logo {
		flex-basis: 40%;
		min-width: 200px;
	}

	.banner-logo > img {
		max-width: 100%;
		max-height: 100%;
		padding: 6px;
		margin-top: 8px;
		box-sizing: border-box;
		filter: drop-shadow(0 0 8px #cdb8a1);
	}

	.banner-poster {
		flex-grow: 1;
		position: relative;
	}

	.banner-poster > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
	}

	.banner-poster > .overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, #fff, transparent 175px);
	}

	main {
		padding: 16px 20px;
		background-color: #f7f1ea;
		background-image: url("$lib/assets/clean-gray-paper.png");
		box-shadow: 0 -5px 6px rgba(0,0,0,0.2);
		min-height: calc(100vh - 200px);
		position: relative;
		z-index: 1;
		border-radius: 0 0 4px 4px;
	}

	.hermes {
		margin: 2em 0 0;
		border-bottom: 4px solid #008942;
		display: flex;
		justify-content: end;
	}

	.hermes > img {
		margin-right: 16px;
	}

	footer {
		margin-top: auto;
		text-align: center;
		padding: 16px;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
	}

	nav {
		display: flex;
		padding-bottom: 0;
		position: relative;
		top: 4px;
		z-index: 1;
		padding-top: 10px;
		overflow-x: auto;
	}

	nav > a {
		padding: 6px 12px 12px;
		box-sizing: border-box;
		min-width: 110px;
		margin-right: 3px;
		background-color: #f2e9de;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		text-decoration: none;
		color: #333517;
		font-weight: bold;
		display: inline-flex;
		align-items: center;
		text-transform: lowercase;
		font-family: var(--font-sans-cond);
		font-size: 16px;
		box-shadow: 5px 2px 5px rgba(0,0,0,0.5);
		transition: 0.2s;
		background-image: url("$lib/assets/light-paper-fibers.png");
		position: relative;
		top: 0;
	}

	nav > a:last-child {
		margin-right: 0;
	}

	nav > a > :global(svg) {
		margin-right: 4px;
		position: relative;
		top: 0.075em;
		flex: 0 0 auto;
	}

	nav > a:hover {
		top: -4px;
	}

	nav > a.active {
		background-color: #302212;
		color: #f7f1ea;
	}

	.main-wrapper {
		width: calc(100% - 1.6em);
		margin: 0.8em;
		border-radius: 6px;
		box-sizing: border-box;
		position: relative;
		box-shadow: 0 0 8px 4px rgba(51, 53, 23, 0.7);
	}

	@media (max-width: 700px) {
		nav > a {
			min-width: 0;
			flex-grow: 1;
			flex-shrink: 0;
		}

		nav > a:last-child {
			box-shadow: none;
		}
	}
</style>