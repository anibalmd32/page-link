class PageLink extends HTMLElement {
	constructor() {
		super()
		this.shadow = this.attachShadow({ mode: 'open' })
		this.shadow.innerHTML = '<a href="#"></a>'
	}

	// * COMPONENT LIFECYCLE
	connectedCallback() {
		this.render()
	}

	disconnectedCallback() {}

	// * COMPONENT METHODS
	render() {
		const label = this.getAttribute('label')
		this.shadowRoot.querySelector('a').textContent = label
	}
}

customElements.define('page-link', PageLink)
