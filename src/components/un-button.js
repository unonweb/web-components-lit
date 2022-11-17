import { LitElement, html, render, css } from "lit"

export default class UnButton extends LitElement {
    
	static styles = css``

	static properties = {
		theme: { type: String, attribute: true, reflect: true },
		title: { type: String, attribute: true, reflect: true },
	}

    constructor() {
        super()
		this.theme = 'vaadin'
		this.title = 'click'
    }

	render() {
		console.log('render() called')
		return html`
			<link rel="stylesheet" href='/components/un-button--add.css'>
			<button>${this.title}</button>
		`
	}

    
}

customElements.define('un-button', UnButton)