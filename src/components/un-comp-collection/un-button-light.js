import { LitElement, html, render, css } from "lit"

export class UnButtonLight extends LitElement {
    

	static properties = {
		theme: { type: String, reflect: true },
		title: { type: String, reflect: true },
	}

    constructor() {
        super()
		this.theme = 'vaadin-1'
		this.title = 'click'
    }

	createRenderRoot() {
		return this;
	}

	render() {
		console.log('render() called')
		return html`
		<button>${this.title}</button>`
	}

    
}

customElements.define('un-button-light', UnButtonLight)