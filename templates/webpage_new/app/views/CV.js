import { html } from '../../core/modules/html.js';

export const CV = () => {
	return html`<iframe
		src="/static/cv2025.pdf"
		width="100%"
		style="height: 100%; border: none; flex-grow: 1;"
	></iframe>`;
};
