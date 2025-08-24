htmx.config.includeIndicatorStyles = false;

document.addEventListener('htmx:configRequest', (event) => {
	const { appversion } = document.body.dataset;
	event.detail.headers['x-app-version'] = appversion;
});

// register listeners for click only here -> manually on element does not get registered when doing dynamic routing
document.addEventListener('click', (event) => {
	// remove closeables -> atm its only the alert
	const close = event.target.closest('[data-js-close]');
	if (close) {
		const closeable = close.closest('[data-js-closeable]');
		closeable.remove();
	}

	const aboutItem = event.target.closest('.about-item');
	if (aboutItem) {
		aboutItem.querySelector('ul').classList.toggle('li-visible');
	}

	// toggle visibility and clicked of project cards
	const projectComponent = event.target.closest('.project-component');
	if (projectComponent) {
		projectComponent
			.querySelector('.content')
			?.classList.toggle('content-visible');
		projectComponent.classList.toggle('clicked');
	}
});

let latestProjectComponent = null;
document.addEventListener('mouseover', (event) => {
	const projectComponent = event.target.closest('.project-component');
	if (latestProjectComponent && latestProjectComponent !== projectComponent) {
		latestProjectComponent
			.querySelector('.content')
			?.classList.remove('content-visible');
		latestProjectComponent.classList.remove('clicked');
	}

	latestProjectComponent = projectComponent;
});

// auto remove the proper elements -> atm its only the alert
document.addEventListener('htmx:afterProcessNode', (event) => {
	const element = event.detail.elt;
	const timing = element.getAttribute('data-js-remove-me');
	if (timing) {
		setTimeout(() => {
			if (element.parentElement)
				element.parentElement.removeChild(element);
		}, htmx.parseInterval(timing));
	}
});
