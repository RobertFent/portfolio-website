import { html } from '../../core/modules/html.js';
import { ProjectComponent } from './ProjectComponent.js';

export const Services = () => {
	const serviceComponentWidth = 47;
	return html`<style>
			me .service-components {
				margin-top: var(--size-16);
				flex-wrap: wrap;
				justify-content: flex-start;
			}
			@media (max-width: 900px) {
				me .service-components {
					flex-direction: column;
				}
			}
		</style>
		<h1>Services</h1>
		<div class="service-components flex-row">
			${ProjectComponent(
				'SaaS Web App Setup',
				'I offer to setup StackZero on a freshly installed VPS hosted by Hetzner so that your SaaS Web App runs with under 5€/month',
				serviceComponentWidth,
				'setup_white.png',
				'Fiverr',
				'https://www.fiverr.com/s/yvaNb0G',
				'StackZero Setup Gig'
			)}
			${ProjectComponent(
				'Cloud Cost Optimization',
				'I offer to analyze your cloud setup on preferably AWS and its monthly costs to propose cost saving opportunities. If possible and needed I also offer to migrate your existing setup to Hetzner to save you up to 97% monthly costs.',
				serviceComponentWidth,
				'optimization_white.png',
				'Contact me',
				'mailto:info@robertfent.com',
				'info@robertfent.com'
			)}
		</div>`;
};
