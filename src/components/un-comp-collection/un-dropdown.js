import { LitElement, html, render, css } from "lit"
import { UnButton } from "./un-button"

export class UnDropDown extends LitElement {
    
    static styles = css`
	/* UN-DROPDOWN */

/* independent of theme */

.drop-content {
	display: none;
	box-shadow: 1px 1px 10px #948d8d;
	width: fit-content;
	margin-top: 5px;
	border-radius: 5px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
}
.drop-content.active {
	display: block;
}
::slotted(div) {
  border-radius: 5px;
}
::slotted(div:hover) {
  background-color: #e4f0ff;
	cursor: pointer;
}
::slotted(hr) {
	border: 1px solid #dbdbdb;
}

/* overlay */

:host([overlay]) {
	position: relative;
}
:host([overlay])
.drop-content {
	position: absolute;
	background-color: white;
	z-index: 3;
}

/* theme="manu-1" */

:host([theme='manu-1']) 
.drop-content {
	font-size: medium;
}
:host([theme='manu-1'])
::slotted(div) {
  padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 5px;
}

/* theme="vaadin-1" */

:host([theme='vaadin-1']) 
.drop-content {
	font-size: medium;
}
:host([theme='vaadin-1'])
::slotted(div) {
  padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 5px;
}


/* independent of theme */

.drop-content {
	display: none;
	box-shadow: 1px 1px 10px #948d8d;
	width: fit-content;
	margin-top: 5px;
	border-radius: 5px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 5px;
	padding-right: 5px;
}
.drop-content.active {
	display: block;
}
::slotted(div) {
  border-radius: 5px;
}
::slotted(div:hover) {
  background-color: #e4f0ff;
	cursor: pointer;
}
::slotted(hr) {
	border: 1px solid #dbdbdb;
}

/* overlay */

:host([overlay]) {
	position: relative;
}
:host([overlay])
.drop-content {
	position: absolute;
	background-color: white;
	z-index: 3;
}

/* theme="manu-1" */

:host([theme='manu-1']) 
.drop-content {
	font-size: medium;
}

:host([theme='manu-1'])
::slotted(div) {
  padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 5px;
}

/* theme="vaadin-1" */

:host([theme='vaadin-1']) 
.drop-content {
	font-size: medium;
}

:host([theme='vaadin-1'])
::slotted(div) {
  padding-top: 5px;
	padding-bottom: 5px;
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 5px;
}

/* theme="vaadin-3" */

:host([theme='vaadin-3'])
.drop-content {
	font-size: small;
}

:host([theme='vaadin-3'])
::slotted(div) {
  padding-top: 2px;
	padding-bottom: 2px;
	padding-left: 10px;
	padding-right: 10px;
}
`
	static properties = {
		openOn: { type: String, reflect: true },
		title: { type: String, reflect: true },
		theme: { type: String, reflect: true },
		overlay: { type: Boolean, reflect: true },

	}

    constructor() {
        super()
		this.openOn = 'click'
		this.title = 'menu'
		this.theme = 'vaadin-1'
		this.overlay = false
    }

	connectedCallback() {
		super.connectedCallback() 
		// always call this because the LitElement class also does some work in the connectedCallback method

		/* document.addEventListener('click', evt => {
			
			const dropContents = this.shadowRoot.querySelectorAll('.drop-content')

			dropContents.forEach(el => {
				// if el does not contain the point where the user clicked, remove the active class from it
				if (!el.contains(evt.target)) el.classList.remove('active')
			})
			
		}) */
	}

    // Render the UI as a function of component state
    render() {
        console.log('UnDropDown render() called')
        return html`
            ${this.tempButton()}
            <div class="drop-content">
                <slot>default slot</slot>
				<slot name="separator"></slot>
				<slot name="last"></slot>
            </div>`
    }

	tempButton() {
		switch (this.openOn) {
			case 'click':
				return html`
					<un-button 
						btnTxt=${this.title}
						theme=${this.theme}
						@click=${evt => this.toggleClass(evt.target, 'active', '.drop-content', 'next')}>
					</un-button>`
			case 'hover':
				return html`
					<un-button 
						btnTxt=${this.title}
						theme=${this.theme}
						@mouseover=${evt => this.addClass(evt.target, 'active', '.drop-content', 'next')}
						@click=${evt => this.rmClass(evt.target, 'active', '.drop-content', 'next')}>
					</un-button>`
		}
	}

    toggleClass(srcBtn, cls, destSel, selMode) {
		console.log('toggleClass() called')
		let destElements = []

		if (selMode === 'all') destElements = this.renderRoot.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.renderRoot.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

        destElements.forEach(el => el.classList.toggle(cls))
    }

	addClass(srcBtn, cls, destSel, selMode) {
		//console.log('addClassToSel called with: ', cls, destSel)

		let destElements = []

		if (selMode === 'all') destElements = this.renderRoot.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.renderRoot.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

		//console.log('desElements: ', destElements)
		destElements.forEach(el => el.classList.add(cls))
	}

	rmClass(srcBtn, cls, destSel, selMode) {
		
		let destElements = []

		if (selMode === 'all') destElements = this.renderRoot.querySelectorAll(destSel)
		if (selMode === 'first') destElements.push(this.renderRoot.querySelector(destSel))
		if (selMode === 'next') destElements.push(this.getNextSibWithSel(srcBtn, destSel))

		destElements.forEach(el => el.classList.remove(cls))
	}

    getNextSibWithSel(startEl, sel) {
        let sibling = startEl.nextElementSibling
		// If there's no selector, return the first sibling
		if (!sel) return sibling
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(sel)) {
                //console.log('matching sibling found: ', sibling)
                return sibling
            }
            sibling = sibling.nextElementSibling
        }
    }
}

customElements.define('un-dropdown', UnDropDown)