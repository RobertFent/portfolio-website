import { html } from '../../core/modules/html.js';

export const Blog = () => {
	return html`<style>
			me .icon {
				background: url('/static/icons/medium_white.svg');
				background-size: auto 100%;
				height: 50px;
				width: 50px;
				display: block;
			}
			me .blog-entry {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: var(--size-8);
				gap: var(--size-6);
			}
			me .blog-entry a {
				font-size: var(--size-5);
			}
		</style>
		<h1>Blog</h1>
		<div class="blog-components flex-row">
			<div class="blog-entry">
				<span class="icon"></span>
				<a href="https://medium.com/@robert.fent"
					>medium.com/@robert.fent</a
				>
			</div>
		</div>`;
};
