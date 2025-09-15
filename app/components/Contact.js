import { html } from '../../core/modules/html.js';
import { ErrorMessage } from './ErrorMessage.js';

/**
 * Returns an HTML template for a contact form with styling for labels, input fields, and buttons.
 * The form includes fields for the user's name and message, with a submit button.
 * @date Jul 7th 2025
 * @author Robot
 *
 * @returns {string}
 */
export const Contact = ({ addSuccess }) => {
	return html`
		<div id="inner-contact">
			<style>
				me .contact-components {
					margin-top: var(--size-12);
					justify-content: space-between;
				}
				me .contact-left {
					display: flex;
					flex-direction: column;
				}
				me .contact-entry {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: var(--size-8);
					gap: var(--size-6);
				}
				me .contact-entry a {
					font-size: var(--size-5);
				}
				me .email-icon {
					background: url('/static/icons/email_white.png');
					background-size: auto 100%;
					height: 50px;
					width: 50px;
				}
				me .github-icon {
					background: url('/static/icons/github_white.svg');
					background-size: auto 100%;
					height: 50px;
					width: 50px;
				}
				me .linkedin-icon {
					background: url('/static/icons/linkedin_white.svg');
					background-size: auto 100%;
					height: 50px;
					width: 50px;
				}
				me .contact-right {
					width: 40vw;
				}
				me h2 {
					margin-bottom: var(--size-4);
					text-align: center;
				}
				me form {
					background: var(--color-secondary);
					border: 1px solid var(--color-accent);
					border-radius: var(--radius-xl);
					padding: var(--size-6);
				}
				me .form-group {
					display: flex;
					flex-direction: column;
					margin-bottom: var(--size-4);
				}
				me label {
					margin-bottom: var(--size-1);
					font-weight: bold;
					color: var(--color-primary);
				}
				me button {
					margin-top: var(--size-2);
					padding: var(--size-2) var(--size-4);
					border: none;
					border-radius: var(--radius-sm);
					background: var(--color-primary);
					color: white;
					font-weight: bold;
					cursor: pointer;
					transition: background 0.2s ease;
				}
				me input[type='text'] {
					padding: var(--size-2);
					border: 1px solid var(--color-secondary-grey);
					border-radius: var(--radius-sm);
					font-size: 1rem;
					color: var(--color-primary);
				}
				me input[type='text']:focus {
					outline: 2px solid var(--color-accent);
					outline-offset: 2px;
				}
				me #submit-message {
					margin-top: var(--size-4);
					text-align: center;
					font-size: var(--size-5);
					font-weight: bold;
					opacity: 0;
				}
				me #submit-message.show-message {
					opacity: 0;
					-moz-animation: showMessageAnimation 2s alternate 2;
					/* Firefox */
					-webkit-animation: showMessageAnimation 2s alternate 2;
					/* Safari and Chrome */
					-o-animation: showMessageAnimation 2s alternate 2;
					/* Opera */
					animation: showMessageAnimation 2s alternate 2;
					-webkit-animation-fill-mode: forwards;
					animation-fill-mode: forwards;
				}
				@keyframes showMessageAnimation {
					to {
						opacity: 1;
					}
				}
				me .table-label {
					font-weight: bold;
					margin-top: var(--size-16);
					margin-bottom: var(--size-4);
					font-size: var(--size-6);
					text-align: left;
				}
				me table {
					width: 100%;
					margin-top: var(--size-6);
					border-radius: var(--radius-sm);
					overflow: hidden;
					box-shadow: 0 0 40px 0 var(--color-accent);
				}

				me th,
				me td {
					text-align: left;
					padding: var(--size-2);
				}
				me th {
					font-weight: bold;
					color: var(--color-secondary);
					background-color: var(--color-accent);
					opacity: 0.9;
				}
				tr:nth-child(even) {
					background-color: var(--color-primary-grey);
				}
				@media (max-width: 900px) {
					me {
						margin-top: var(--size-16);
						flex-direction: column;
					}
					me .contact-components {
						margin-top: var(--size-6);
						flex-direction: column;
					}
					me .contact-entry {
						margin-top: var(--size-6);
					}
					me .contact-right {
						width: 100%;
					}
					me .table-label {
						margin-top: 0;
					}
				}
				/* disable hover on mobile devices */
				@media (hover: hover) and (pointer: fine) {
					button:hover {
						background: var(--color-accent);
					}
				}
			</style>
			<h1>Contact</h1>
			<div class="contact-components flex-row">
				<div class="contact-left">
					<div class="contact-entry">
						<span class="email-icon"></span>
						<a href="mailto:info@robertfent.com"
							>info@robertfent.com</a
						>
					</div>
					<div class="contact-entry">
						<span class="github-icon"></span>
						<a href="https://github.com/RobertFent"
							>github.com/RobertFent</a
						>
					</div>
					<div class="contact-entry">
						<span class="linkedin-icon"></span>
						<a
							href="https://www.linkedin.com/in/robert-fent-905140280"
							>linkedin.com/in/robert-fent</a
						>
					</div>
				</div>
				<div class="contact-right">
					<h2>Leave me a nice message ✨</h2>
					<form
						hx-post="/contact_entries"
						hx-target="#inner-contact"
						hx-swap="outerHTML"
						hx-target="this"
					>
						<div class="form-group">
							<label for="author">Your name</label>
							<input
								type="text"
								id="author"
								name="author"
								required
								placeholder="Alexander Fent"
							/>
						</div>
						<div class="form-group">
							<label for="content">Your message</label>
							<input
								type="text"
								id="content"
								name="content"
								required
								placeholder="Howdy!🤠"
							/>
						</div>
						<button type="submit">Submit Entry</button>
						${ErrorMessage()}}
					</form>
					<p
						id="submit-message"
						class="${addSuccess === 'true' ? 'show-message' : ''}"
					>
						Entry has been added. Thank you! :-)
					</p>
				</div>
			</div>
		</div>
	`;
};
