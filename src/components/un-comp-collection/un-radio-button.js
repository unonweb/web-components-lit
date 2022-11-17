import { LitElement, html, render, css } from "lit"

export class UnRadioButton extends LitElement {
    static properties = {
		theme: { type: String, reflect: true },
		label: { type: String, reflect: true },
		name: { type: String, reflect: true },
		value: { type: String, reflect: true },
		id: { type: String, reflect: true },
		orientation: { type: String, reflect: true },
	}
    
	static styles = css`
/* independent of theme */

/* THEME = VAADIN-1 */
label {
	color: green;
}
:host([theme='vaadin-1'])
label {
	color: #374453;
	font-size: medium;
  font-weight: bold;
  
	/*background-color: lavenderblush;*/
}
:host([theme='vaadin-1'])
input {
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

`
    constructor() {
        super()
    }

	createRenderRoot() {
		return this;
	}
	
	render() {
		
		return html`
		<style>
un-radio-button[theme='vaadin']
label {
	font-weight: bold;
}

/* Customize the label (the container) */
un-radio-button[theme='w3schools']
label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default radio button */
un-radio-button[theme='w3schools']
label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
/* Create a custom radio button */
un-radio-button[theme='w3schools']
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}
/* On mouse-over, add a grey background color */
un-radio-button[theme='w3schools']
label:hover input ~ .checkmark {
  background-color: #ccc;
}
/* When the radio button is checked, add a blue background */
un-radio-button[theme='w3schools']
label input:checked ~ .checkmark {
  background-color: #2196F3;
}
/* Create the indicator (the dot/circle - hidden when not checked) */
un-radio-button[theme='w3schools']
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
un-radio-button[theme='w3schools']
label input:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
un-radio-button[theme='w3schools']
label .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
		</style>
		<!-- html -->
		<label class="container" ?hidden=${!this.label}>
			<input type="radio" name=${this.name} id=${this.id} value=${this.value}>
			<span class="checkmark"></span>
			${this.label}
		</label>${this.setAlignment()}
		
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
    
}

customElements.define('un-radio-button', UnRadioButton)