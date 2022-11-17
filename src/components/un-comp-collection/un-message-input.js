import { LitElement, html, render, css } from "lit"
import { UnButton } from "./un-button"
import { UnInput } from "./un-input"

export class UnMessageInput extends LitElement {
    
	static styles = css`

/* UN-MESSAGE-INPUT */

/* independent of theme */
:host {
	display: flex;
	flex-direction: column;
	align-items: normal;
}
un-input {
	margin-right: 15px;
	margin-bottom: 15px;
}
@media (min-width: 350px) {
	:host {
		flex-direction: row;
		align-items: last baseline;
	}
}

/* primary theme */

/* secondary theme */

/* tertiary theme */

`

	static properties = {
		// generic attributes:
		theme: { type: String, reflect: true },
		// button attributes:
		btnTxt: { type: String, reflect: true },
		// input attributes:
		placeholder: { type: String, reflect: true },
		type: { type: String, reflect: true },
		label: { type: String, reflect: true },
	}
    constructor() {
        super()
    }

	render() {
		return html`
		<un-input 
			type=${this.type} 
			placeholder=${this.placeholder}
			theme=${this.theme}
			label=${this.label}>
		</un-input>
		<un-button
			theme=${this.theme}
			btnTxt=${this.btnTxt}></un-button>
		`
	}

    
}

customElements.define('un-message-input', UnMessageInput)