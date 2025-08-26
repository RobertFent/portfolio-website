import { html } from '../../core/modules/html.js';
import { ProjectComponent } from './ProjectComponent.js';

export const Projects = () => {
	const projectComponentWidth = 30;
	return html`<style>
			me .project-components {
				margin-top: var(--size-16);
				flex-wrap: wrap;
				justify-content: flex-start;
			}
			@media (max-width: 900px) {
				me .project-components {
					flex-direction: column;
				}
			}
		</style>
		<h1>Projects</h1>
		<div class="project-components flex-row">
			${ProjectComponent(
				'StackZero',
				'I built this site using my own lightweight framework called <strong>StackZero</strong>, which is based on a simple and efficient stack: <a href="https://nodejs.org">Node.js</a> with <a href="https://fastify.dev/">Fastify</a>, <a href="https://htmx.org/">htmx</a> and <a href="https://sqlite.org/">SQLite</a> — all wrapped in <a href="https://www.docker.com/">Docker</a> and deployed via <a href="https://github.com/features/actions">GitHub Actions</a>. The entire setup is designed to be low-cost (under 5€ per month, including DNS via <a href="https://www.ionos.de/">Ionos</a> and hosting on a <a href="https://www.hetzner.com/">Hetzner</a> server), transparent, and fully under my control.',
				projectComponentWidth,
				'html_white.png',
				'GitHub',
				'https://github.com/RobertFent/StackZero',
				'StackZero'
			)}
			${ProjectComponent(
				'Home Server',
				'I setup an home server using an <strong>HP ProDesk 600 G4</strong> running <a href="https://ubuntu.com/">Ubuntu Server</a>, fully automated with <a href="https://www.ansible.com/">Ansible</a> and containerized via <a href="https://www.docker.com/">Docker Compose</a>. It hosts a media automation suite based on the <strong>arr stack</strong> and <a href="https://www.plex.tv/">Plex</a> — all using images from <a href="https://www.linuxserver.io/">LinuxServer.io</a>. The setup is zero-config, reproducible, and entirely under my control — ideal for managing media and services on my own terms.',
				projectComponentWidth,
				'server_white.png'
			)}
			${ProjectComponent(
				'Hetzner Migration',
				'I migrated our infrastructure from <strong>AWS</strong> to <strong>Hetzner</strong>, reducing monthly costs from ~4.000€ to ~100€ — saving around 3.900€ per month. The setup previously relied mostly on EC2 and ECS, which I fully replaced by consolidating all services into a single <a href="https://docs.docker.com/compose/">Docker Compose</a> stack. I added <a href="https://hub.docker.com/r/nginxproxy/nginx-proxy">NGINX</a> as a reverse proxy and automated HTTPS via <a href="https://hub.docker.com/r/nginxproxy/acme-companion">acme</a>. Everything is now containerized, reproducible, and fully under my control — deployed on a performant Hetzner server.',
				projectComponentWidth,
				'migration_white.png'
			)}
			${ProjectComponent(
				'Stocks Analyzer',
				'I built a stock automation tool in <a href="https://www.python.org/">Python</a> based on the <strong>PowerX Strategy</strong> by Markus Heitkoetter. Designed as a command line application, it generated buy and sell signals to support my trading decisions — all fully local and under my control.',
				projectComponentWidth,
				'python_white.png',
				'GitHub',
				'https://github.com/RobertFent/PowerXStocksAnalyzer',
				'PowerXStocksAnalyzer'
			)}
			${ProjectComponent(
				'Weather Forecast',
				'I built a small forecasting tool in <a href="https://www.python.org/">Python</a> to predict future weather based on historical data. It allows data updates via the <a href="https://www.worldweatheronline.com/developer/">WorldWeatherOnline API</a> and supports feature selection and training via a simple CLI — ideal for experimenting with time series prediction in a fully local setup.',
				projectComponentWidth,
				'weather_forecast_white.png',
				'GitHub',
				'https://github.com/RobertFent/Weather-Forecast',
				'Weather-Forecast'
			)}
		</div>`;
};
