import { html } from '../../core/modules/html.js';

export const PrivacyPolicy = () => {
	return html`<style>
			me {
				background: var(--color-primary);
			}
			me ul {
			list-style: inside;
		</style>
		<h1>Privacy Policy</h1>
		<p><strong>Last updated:</strong> 15.09.2025</p>

		<h2>1. Data We Collect</h2>
		<h3>a) Information you provide directly</h3>
		<ul>
			<li>Name (if entered in the contact form)</li>
			<li>Message (the text you send me)</li>
		</ul>

		<h3>b) Information collected automatically</h3>
		<p>We use Google Analytics to collect information such as:</p>
		<ul>
			<li>Pages visited, time spent, and clicks</li>
			<li>Browser type, device, and operating system</li>
			<li>IP address (anonymized before storage/processing)</li>
		</ul>

		<h2>2. How I Use Your Data</h2>
		<ul>
			<li>To respond to your messages and inquiries</li>
			<li>To analyze website traffic and improve our website</li>
			<li>To ensure website security and performance</li>
		</ul>
		<p>
			I do <strong>not</strong> sell or rent your personal data to third
			parties.
		</p>

		<h2>3. Cookies</h2>
		<p>I use cookies to:</p>
		<ul>
			<li>Enable basic website functionality</li>
			<li>Collect analytics data (via Google Analytics)</li>
		</ul>
		<p>I ask for consent before using analytics cookies.</p>

		<p>You can manage or disable cookies through your browser settings.</p>

		<h2>4. Legal Basis for Processing (EU/EEA Visitors)</h2>
		<ul>
			<li>
				<strong>Consent</strong> (Art. 6(1)(a) GDPR) – for analytics
				cookies and when you voluntarily provide your name/message.
			</li>
			<li>
				<strong>Legitimate Interest</strong> (Art. 6(1)(f) GDPR) – for
				basic website functionality and security.
			</li>
		</ul>

		<h2>5. Data Retention</h2>
		<ul>
			<li>
				Messages are stored as long as necessary to process your
				inquiry.
			</li>
			<li>
				Analytics data is stored by Google according to their retention
				settings (typically 14–26 months).
			</li>
		</ul>

		<h2>6. Third-Party Services</h2>
		<p>I use:</p>
		<ul>
			<li>
				<strong>Google Analytics</strong> (by Google LLC). Data may be
				transferred to the United States. Learn more in Google’s Privacy
				Policy:
				<a
					href="https://policies.google.com/privacy"
					target="_blank"
					rel="noopener"
					>https://policies.google.com/privacy</a
				>.
			</li>
		</ul>

		<h2>7. Your Rights (EU/EEA Visitors)</h2>
		<p>You have the right to:</p>
		<ul>
			<li>Access your personal data</li>
			<li>Request correction or deletion</li>
			<li>Withdraw your consent at any time</li>
			<li>File a complaint with your local data protection authority</li>
		</ul>
		<p>
			To exercise these rights, please contact me at
			<a href="mailto:info@robertfent.com">info@robertfent.com</a>
		</p>

		<h2>8. Contact</h2>
		<p>
			If you have any questions about this Privacy Policy or your data,
			please contact:
		</p>
		<p>
			<strong>Robert Fent</strong><br />
			Email: <a href="mailto:info@robertfent.com">info@robertfent.com</a
			><br />
		</p>

		<footer>
			<p>
				This Privacy Policy may be updated from time to time. Please
				check this page periodically for changes.
			</p>
		</footer>`;
};
