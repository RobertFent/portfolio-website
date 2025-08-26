import { html } from '../../core/modules/html.js';

export const About = () => {
	return html`<style>
			me p {
				font-size: var(--size-5);
			}
			me img {
				border-radius: var(--radius-xl);
				min-width: 250px;
			}
			me .about-items {
				position: relative;
				gap: var(--size-0);
				justify-content: space-evenly;
			}
			me .about-item {
				margin: var(--size-6);
				flex: 1 1 calc(30%);
			}
			me .about-item a {
				cursor: pointer;
				font-size: var(--size-6);
			}
			me .about-item ul {
				position: absolute; /* Hinder ul from growing its parent */
				max-width: 30%;
				overflow: hidden;
				max-height: 0vh;
			}
			me .about-item li {
				margin-top: var(--size-6);
			}
			me .about-item .li-visible {
				max-height: 40vh;
			}
			@media (max-width: 1200px) {
				me p {
					font-size: var(--size-4);
				}
			}
			@media (max-width: 900px) {
				me img {
					max-width: 350px;
				}
				me .about-items {
					flex-direction: column;
				}
				me .about-item ul {
					position: relative;
					max-width: 100%;
					overflow: hidden;
				}
			}
			@media (max-width: 600px) {
				me img {
					max-width: 100%;
				}
				me .about-item {
					margin-left: 0;
				}
			}
		</style>
		<div class="left-content">
			<img src="/static/me.jpeg" alt="Photo of me" />
		</div>
		<div class="right-content">
			<h1>About Me</h1>
			<p>
				Howdy 🤠, my name is Robert, I am 27 years old and I live in
				Germany.
			</p>
			<p>
				I am a passionate Software Developer who loves to build new
				Software with a focus on maintainablity, automated deployments
				and low cost.
			</p>
			<p>
				I am also into working out 🏋️, drinking coffee ☕, cocking 👨‍🍳 or
				traveling 🧳 with my fiancee. Actually I am doing most
				activities with her if I think about it🤔 but I love her so this
				is okay 🫶. Anyways there is one very important hobby I share
				with my brother Lugo -> Warhammer🛠️🎨
			</p>
			<div class="flex-row about-items">
				<div class="about-item">
					<a>Skills</a>
					<ul style="list-style: inside;">
						<li>JavaScript/TypeScript, Python</li>
						<li>Node.js/Flask</li>
						<li>Docker, AWS, GitLab CI</li>
						<li>Clean Code & Software Architecture</li>
						<li>Linux, Shell</li>
					</ul>
				</div>
				<div class="about-item">
					<a>Work Experience</a>
					<ul>
						<li>
							<strong>10/2019 - 06/2021</strong>: Fullstack
							Software Developer @ DioVision Systems GmbH
						</li>
						<li>
							<strong>10/2023 - 05/2024</strong>: Fullstack
							Software Developer @ T.CON GmbH & Co. KG
						</li>
						<li>
							<strong>06/2024 - present</strong>: Fullstack
							Software Developer & DevOps Engineer @ ECO2GROW GmbH
						</li>
					</ul>
				</div>
				<div class="about-item">
					<a>Education</a>
					<ul>
						<li>
							<strong>10/2017 - 09/2021</strong>: B.A. in Media
							Informatics @ University of Regensburg
						</li>
						<li>
							<strong>10/2021 - 09/2023</strong>: M.Sc in Computer
							Science @ OTH Regensburg
						</li>
					</ul>
				</div>
			</div>
		</div>`;
};
