import { LitElement, html, render, css } from "lit"

export class UnArrowTwo extends LitElement {
    static properties = {
		left: { type: Boolean, reflect: true },
		right: { type: Boolean, reflect: true },

	}
    
	static styles = css`
/* html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  background: rgb(17,123,189);
} */

button {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline:0;
}

svg {
  padding: 5px;
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -45px;
  margin-left: -35px;
  width: 70px;
  height: 90px;
}

.left {
  left: 42%;
}

.right {
  left: 58%;
}

.left:hover polyline,
.left:focus polyline {
  stroke-width: 3;
}

.left:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
  stroke-width: 3;
}

.right:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

polyline {
  transition: all 250ms ease-in-out;
}
`
    constructor() {
        super()
    }

	render() {
		return html`
			${this.createLeft()}
			${this.createRight()}
		`
	}

	createLeft() {
		if (!this.shadowRoot.host.hasAttribute('left')) return ''
		return html`
		<button class="arrow left">
			<svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
				<polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
			</svg>  
		</button>
		`
	}

	createRight() {
		if (!this.shadowRoot.host.hasAttribute('right')) return ''
		return html`
			<button class="arrow right">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
					<polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
				</svg>
			</button>
		`
	}

    
}

customElements.define('un-arrow-two', UnArrowTwo)