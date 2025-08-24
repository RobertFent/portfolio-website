import { html } from '../../core/modules/html.js';

export const ProjectComponent = (
	header,
	content,
	width,
	iconName,
	linkName,
	link,
	linkDescription
) => {
	return html`
		<div class="project-component">
			<style>
				me {
					background-color: var(--color-primary-grey);
					border-radius: var(--radius-md);
					padding: var(--size-8);
					align-self: flex-start;
					cursor: pointer;
					flex: 1 1 calc(${width}%);
					box-sizing: border-box;
					max-width: calc(${width}%);
				}
				me h1 {
					font-size: var(--size-6);
				}
				me .icon {
					background: url('/static/icons/${iconName}');
					background-size: auto 100%;
					height: 50px;
					width: 50px;
					display: block;
				}
				me .content {
					margin-top: var(--size-2);
					overflow: hidden;
					max-height: 0vh;
					transition-property: all;
					transition-duration: 1s;
					transition-timing-function: cubic-bezier(1, 1, 1, 1);
				}
				me .content-visible {
					max-height: 40vh;
				}
				me .content .git-link {
					margin-top: var(--size-2);
					margin-bottom: var(--size-2);
				}
				me .expand_button {
					text-decoration: underline;
					cursor: pointer;
				}
				me .expand_button:hover {
					text-decoration: none;
				}
				@media (max-width: 900px) {
					me {
						flex: 1 1 100%;
						max-width: 100vw;
					}
					me h1 {
						font-size: var(--size-7);
					}
				}
				/* disable project comp coloring on mobile devices */
				@media (hover: hover) and (pointer: fine) {
					me {
						&:not(.clicked):hover {
							background-color: var(--color-accent);
						}
					}
				}
			</style>
			<span class="icon"></span>
			<h1>${header}</h1>
			<div class="content">
				<p>${content}</p>
				${link
					? html`<p class="git-link">
							${linkName}:
							<a href="${link}">${linkDescription}</a>.
					  </p>`
					: ''}
			</div>
			<p class="expand_button">Read More</p>
		</div>
	`;
};
