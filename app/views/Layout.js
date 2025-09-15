import { html } from '../../core/modules/html.js';

export const Layout = (Main) => {
	return (params) => {
		return html`
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta name="description" content="Robots Website" />
					<!-- Scripts -> these are loaded from static folder instead of cdn to prevent reliance on it -->
					<script src="/static/js/htmx@2.0.4.client.js"></script>
					<script src="/static/js/css-scope-inline.js"></script>
					<script>
						// The default value includes 'class' as well.
						// We exclude it, otherwise classes added by MutationObserver are being removed during settling
						htmx.config.attributesToSettle = [
							'style',
							'width',
							'height'
						];
					</script>
					<script
						type="module"
						src="/static/js/app.client.js"
						defer
					></script>

					<!-- Cookie Consent by TermsFeed https://www.TermsFeed.com -->
					<script
						type="text/javascript"
						src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js"
						charset="UTF-8"
					></script>
					<script type="text/javascript" charset="UTF-8">
						document.addEventListener(
							'DOMContentLoaded',
							function () {
								cookieconsent.run({
									notice_banner_type: 'simple',
									consent_type: 'express',
									palette: 'dark',
									language: 'en',
									page_load_consent_levels: [
										'strictly-necessary'
									],
									notice_banner_reject_button_hide: false,
									preferences_center_close_button_hide: false,
									page_refresh_confirmation_buttons: false,
									website_name: 'www.robertfent.com'
								});
							}
						);
					</script>

					<!-- Google Analytics -->
					<script
						type="text/plain"
						data-cookie-consent="tracking"
						async
						src="https://www.googletagmanager.com/gtag/js?id=G-VVR2WGWTBG"
					></script>
					<script type="text/plain" data-cookie-consent="tracking">
						window.dataLayer = window.dataLayer || [];
						function gtag() {
						    dataLayer.push(arguments);
						}
						gtag('js', new Date());
						gtag('config', 'G-VVR2WGWTBG', {'anonymize_ip': true});
					</script>
					<!-- end of Google Analytics-->

					<noscript
						>Free cookie consent management tool by
						<a href="https://www.termsfeed.com/"
							>TermsFeed</a
						></noscript
					>
					<!-- End Cookie Consent by TermsFeed https://www.TermsFeed.com -->

					<!-- Styles -->
					<link rel="stylesheet" href="/static/css/reset.css" />
					<link rel="stylesheet" href="/static/css/app.css" />
					<link rel="icon" href="/static/favicon.png" />

					<title>Robert Fent - Portfolio</title>
				</head>

				<body data-appversion="${params.appVersion}">
					<style>
						html {
							scroll-behavior: smooth;
						}
						me {
							font-family: var(--font-sans);
							background-color: var(--color-primary);
							background-image: url('/static/robert1.png');
							background-repeat: no-repeat;
							background-position: top right;
							background-size: 1000px auto;
							color: var(--color-secondary);
						}
						body {
							display: flex;
							flex-direction: column;
							min-height: 100vh;
						}
						main {
							flex: 1;
							display: flex;
							flex-direction: column;
							gap: var(--size-4);
							padding: var(--size-4);
							border-radius: var(--radius-md);
						}
						@media (max-width: 600px) {
							me {
								background-position: top left;
								background-size: 800px auto;
							}
						}
						@media (max-width: 400px) {
							me {
								background-position: top left;
								background-size: 600px auto;
							}
						}
					</style>
					<header>
						<style>
							me {
								display: flex;
								align-items: center;
								justify-content: space-between;
								padding: var(--size-4);
								margin-left: var(--size-8);
							}
							me .name-heading {
								font-size: var(--size-16);
							}
							me a {
								margin-right: var(--size-6);
								color: var(--color-secondary);
								font-size: var(--size-6);
							}
							@media (max-width: 600px) {
								me {
									flex-direction: column;
									align-items: flex-start;
									margin-left: 0;
								}
								me .name-heading {
									font-size: var(--size-10);
								}
								me nav {
									display: flex;
									flex-direction: column;
									flex-wrap: wrap;
									margin-top: var(--size-2);
								}

								me nav a {
									font-size: var(--size-6);
									margin-left: 0;
									margin-right: var(--size-3);
								}
							}
						</style>
						<div class="name-heading">
							<span style="color: var(--color-accent);">R</span
							>obert
						</div>
						<nav hx-target="main" hx-boost="true">
							<a href="/#">Home</a>
							<a href="/#about">About</a>
							<a href="/#projects">Projects</a>
							<a href="/#services">Services</a>
							<a href="/#contact">Contact</a>
							<a href="/cv">CV</a>
							<a href="/privacy_policy">Privacy Policy</a>
						</nav>
					</header>
					<main hx-target="this" hx-swap="innerHTML">
						${Main(params)}
					</main>
					<footer>
						<style>
							me {
								text-align: center;
								max-width: var(--width-lg);
								margin: 0 auto;
								padding: var(--size-2) 0;
							}
						</style>
						<a href="#" id="open_preferences_center"
							>Update cookies preferences</a
						><br />
						© ${new Date().getFullYear()} Based on work by
						<a href="https://sizovs.net">Eduards Sizovs</a>.
						Enhanced & maintained by
						<a href="https://robertfent.com">Robert Fent</a>. All
						rights reserved.
						<br />
						<p>
							<a
								target="_blank"
								href="https://icons8.com/icon/3tC9EQumUAuq/github"
								>GitHub</a
							>
							,
							<a
								target="_blank"
								href="https://icons8.com/icon/8808/linkedin"
								>LinkedIn</a
							>
							and
							<a
								target="_blank"
								href="https://icons8.com/icon/111591/medium-monogram"
								>Medium</a
							>
							icon by
							<a target="_blank" href="https://icons8.com"
								>Icons8</a
							>
						</p>
					</footer>
				</body>
			</html>
		`;
	};
};
