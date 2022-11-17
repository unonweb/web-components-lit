import { LitElement, html, render, css } from "lit"

export class UnInput extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		placeholder: { type: String, reflect: true },
		type: { type: String, reflect: true },
		label: { type: String, reflect: true },
	}
    
	static styles = css`

/* UN-INPUT */

/* independent of theme */

:host {
	display: block;
	width: fit-content;
}
:host(:hover) label {
	color: #3e4a5a;
}
:host(:focus) label {
	color: #006af5;
}
:host(:hover) input {
	background-color: #dadfe4;
}
label {
	font-family: sans;
	display: block;
	color: #626d7c;
}
input {
	font-size: medium;
	border: none;
	margin-top: 5px;
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 5px;
	padding-right: 5px;
	background-color: #e7ebef;
	border-radius: 5px;
}
input:focus {
	background-color: #e7ebef;
	outline: 2px solid #006af5ab;
  outline-offset: 0px;
}
input:focus label {
	color: #006af5ab;
}

/* vaadin-1 theme */

:host([theme='vaadin-1']) 
input {
	font-size: medium;
}

/* vaadin-2 theme */

:host([theme='vaadin-2']) 
input, label {
	font-size: medium;
}

/* vaadin-3 theme */

:host([theme='vaadin-3']) 
input, label {
	font-size: small;
}
`
    constructor() {
        super()
		this.theme = 'vaadin-1'
    }

	render() {
		return html`
		<label ?hidden=${!this.label} for="input">${this.label}</label>
		<input id="input" type=${this.type} placeholder=${this.placeholder}>
		`
	}

    
}

customElements.define('un-input', UnInput)