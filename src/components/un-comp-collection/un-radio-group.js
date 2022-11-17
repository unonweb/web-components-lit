import { LitElement, html, render, css } from "lit"
import { UnRadioButton } from "./un-radio-button"

export class UnRadioGroupNative extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		legend: { type: String, reflect: true },
		orientation: { type: String, reflect: true },
		items: { type: String, reflect: true },
		// radio-button
		//label: { type: String, reflect: true },
	}
    
	static styles = css`
/* independent of theme */

slot {
	background-color: lightblue
}
::slotted(label) {

}
::slotted(input) {
	
}
/* primary theme */

/* secondary theme */

/* tertiary theme */

`
    constructor() {
        super()
		this.items = 'one two three'
    }

	get _items() {  
		return this.items.split(' ')
	}

	render() {
		//${this.createRadioButtons()}

		return html`
			<fieldset>
				<legend ?hidden=${!this.legend}>${this.legend}</legend>
				${this._items.map(item => {
					return html`
						<input type="radio" name="group" id=${item}>
						<label for=${item}>${item}</label>${this.setAlignment()}
					`
				})}
			</fieldset>		
		`
	}

	setAlignment() {
		if (this.orientation == 'horizontal') {
			return
		}
		if (this.orientation == 'vertical') {
			return html`<br>`
		}
	}
	createRadioButtons() {
		//let itemsArr = this.items.split(' ')
		
		return html`
			${this._items.forEach(item => {
				return html`
					<input type="radio" name="group" id=${item}>
					<label for=${item}>${item}</label>
				`
			})}

		`
		
			
	}

    
}

export class UnRadioGroup extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		legend: { type: String, reflect: true },
		orientation: { type: String, reflect: true },
		// radio-button
		//label: { type: String, reflect: true },
	}
    
	static styles = css`

/* independent of theme */
:host {

}

/* THEME = VAADIN-1 */

:host([theme='vaadin-1'])
fieldset {
	border: none;
}
:host([theme='vaadin-1'])
legend {
	color: #7e8793;
}
:host([theme='vaadin-1'])
::slotted(label) {
	color: #374453;
	font-size: medium;
  font-weight: bold;
  
	/*background-color: lavenderblush;*/
}
:host([theme='vaadin-1'])
::slotted(input) {
	appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #dadfe4;
  /* Not removed via appearance */
  margin: 0;
	font: inherit;
  width: 1.15em;
  height: 1.15em;
  border-radius: 50%;
	transform: translateY(+0.075em);
}

/* secondary theme */

/* tertiary theme */
`
    constructor() {
        super()
    }

	firstUpdated() {  
		const slot = this.shadowRoot.querySelector('slot');  
		this._slottedElements = slot.assignedElements({flatten: true})
		this.passAttributesTo({
			orientation: this.orientation,
			theme: this.theme
			}, this._slottedElements)
	}

	willUpdate() {
		this.passAttributesTo({
			orientation: this.orientation,
			theme: this.theme
			}, this._slottedElements)
	}

	render() {

		return html`
			<fieldset>
				<legend ?hidden=${!this.legend}>${this.legend}</legend>
				<slot></slot>
			</fieldset>		
		`
	}

	passAttributesTo(attributes = {}, elements) {
		let attKeys = Object.keys(attributes)
		if (!elements || !attributes) return
		elements.forEach(el => {
			attKeys.forEach(key => {
				el.setAttribute(key, attributes[key])
				console.log(`setting attribute ${key} with value ${attributes[key]} to element:`)
				console.log(el)
			})
			
		})
	}

}

customElements.define('un-radio-group', UnRadioGroup)