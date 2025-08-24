import { html } from '../../core/modules/html.js';
import { Contact } from '../components/Contact.js';
import { Blog } from '../components/Blog.js';
import { Projects } from '../components/Projects.js';
import { About } from '../components/About.js';
import { Services } from '../components/Services.js';

export const Root = ({ entries }) => {
	return html`
		<style>
			me {
				margin: var(--size-32);
			}
			me .flex-row {
				display: flex;
				flex-direction: row;
				gap: var(--size-12);
			}
			me #home {
				display: flex;
				flex-direction: column;
				margin-top: var(--size-32);
				height: 70vh;
			}
			me h1 {
				font-size: var(--size-14);
			}
			me #website-content > div {
				margin-top: var(--size-32);
			}
			@media (max-width: 1400px) {
				me {
					margin: var(--size-8);
				}
				me .flex-row {
					gap: var(--size-12);
				}
				me #about {
					margin-top: var(--size-32);
				}
			}
			@media (max-width: 900px) {
				me {
					margin: var(--size-4);
				}
				me h1 {
					font-size: var(--size-12);
				}
				me #home {
					justify-content: flex-start;
					margin-top: var(--size-32);
					height: 40vh;
				}
				me #website-content > div {
					margin-top: var(--size-16);
					flex-direction: column;
				}
			}
			@media (max-width: 600px) {
				me {
					margin: var(--size-2);
				}
			}
		</style>

		<div id="home">
			<h1>Robert Fent</h1>
			<h2>Fullstack Software Developer & DevOps Engineer</h2>
		</div>

		<div id="website-content">
			<div id="about" class="colored-component flex-row">${About()}</div>
			<div id="projects">${Projects()}</div>
			<div id="services">${Services()}</div>
			<div id="contact">${Contact({ entries })}</div>
			<div id="blog">${Blog()}</div>
		</div>
	`;
};
