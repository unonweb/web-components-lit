import { LitElement, html, render, css } from "lit"

export class UnAccordion extends LitElement {

	static styles = css`



/* UN-ACCORDION */

:host {
	display: block;
	width: 300px;
	cursor: pointer;
}
.title {
	/*! margin: 10px; */
	cursor: pointer;
	padding: 10px;
}
.icon.open {
	transform: rotate(90deg);
}
::slotted(*) {
	overflow: hidden;
	margin: 0;
	padding-left: 10px;
}

/* OPENTYPE = DROP */

:host([openType='drop'])
.wrapper.closed {
	display: none;
}
:host([openType='drop'])
.wrapper.open {
	display: block;
}

/* OPENTYPE = SLIDE */

:host([openType='slide'])
.icon {
	transition: transform 200ms linear;
}
:host([openType='slide'])
.wrapper {
	height: auto;
	transition-property: padding;
	transition-duration: 0.5s;
	transition-timing-function: ease-in-out;
	transition-delay: 0s;
}
:host([openType='slide'])
.wrapper.open {
	padding-top: 10px;
	padding-bottom: 10px;
}
:host([openType='slide'])
.wrapper.closed {
	padding-top: 0px;
}
:host([openType='slide'])
::slotted(*) {
	/* transition */
	transition-property: height, padding;
	transition-duration: 0.5s;
	transition-timing-function: ease-in-out;
	transition-delay: 0s;
	height: 0px;
}

/* THEME = FANCY */

:host([theme='fancy']) {
	/*! border: 2px solid #000; */
	/*! background-color: #3c3051; */
}
:host([theme='fancy'])
.title {
	color: white;
	background-color: #3c3051;
	border-radius: 10px 10px;
}
:host([theme='fancy'])
.title:hover {
	background-color: #966060;
}
:host([theme='fancy'])
.icon {
	float: right;
	margin-right: 5px;
}
:host([theme='fancy'])
.wrapper {
	background-color: #f5f5f5d9;
	border-radius: 10px 10px;
}
:host([theme='fancy'][opentype='drop'])
.wrapper.open {
	padding-top: 10px;
	padding-bottom: 10px;
}

:host([theme='fancy'])
::slotted(*) {
	/*background-color: #f5f5f5d9;*/
	color: black;
}

/* THEME = VAADIN */

:host([theme='vaadin']) {
	/*! border: 2px solid #000; */
	/*! background-color: #3c3051; */
}
:host([theme='vaadin'])
.title {
	color: #7a8390;
}
:host([theme='vaadin'])
.title:hover {
	color: #414d5e;
}
:host([theme='vaadin'])
.icon {
	float: left;
	/*! font-size: larger; */
	margin-right: 10px;
}
:host([theme='vaadin'])
.wrapper {
	/*! is not shown when closed with openType = drop */
	border-bottom: thin solid #e7ebef;
}
:host([theme='vaadin'][opentype='drop'])
.title.closed {
	border-bottom: thin solid #e7ebef;
}
:host([theme='vaadin'][opentype='drop'])
.wrapper.open {
	padding-bottom: 10px;
}
:host([theme='vaadin'])
::slotted(*) {
	/*background-color: #f5f5f5d9;*/
	color: #334050;
}
`
	static properties = {
		title: { type: String, reflect: true },
		theme: { type: String, reflect: true },
		openType: { type: String, reflect: true },
	}

	constructor() {
		super()
		this.title = 'title'
		this.openType = 'drop'
	}

	get _slottedChildren() {  
		const slot = this.shadowRoot.querySelector('slot');  
		return slot.assignedElements({flatten: true});
	}

	firstUpdated() {
		//this._slottedChildren[0].classList.add('content', 'closed')
		this.titleEl = this.shadowRoot.querySelector('.title')
		this.wrapperEl = this.shadowRoot.querySelector('.wrapper')
		this.iconEl = this.shadowRoot.querySelector('.icon')
	}

	render() {
		return html`
			<div 
				class="title closed" 
				@click=${evt => this.openClose()}>${this.title}<span class="icon closed">&#10095;</span>
			</div>
			<div class="wrapper closed">
				<slot></slot>
			</div>
		`
	}

	openClose() {

		let destElements = [this.titleEl, this.wrapperEl, this.iconEl]

		switch (this.openType) {
			case 'drop':
				destElements.forEach(el => {
					el.classList.toggle('closed')
					el.classList.toggle('open')
				})
				break;
			case 'slide':
				if (this.wrapperEl.classList.contains('closed')) {
					// if closed - open it

					//let accumulatedHeight
					this._slottedChildren.forEach(slotChild => {
						slotChild.style.height = 'auto' // let the browser calculate the necessary height
						let autoHeight = slotChild.clientHeight + 'px'
						// now we've got the necessary height
						slotChild.style.height = '0px' // reset it back to keep it closed
						setTimeout(() => {
							slotChild.style.height = autoHeight // now open it with delay
						}, 1)
					})

					destElements.forEach(el => {
						el.classList.remove('closed')
						el.classList.add('open')
					})
					return
				}
				if (this.wrapperEl.classList.contains('open')) {
					// if open - close it
					
					this._slottedChildren.forEach(slotChild => {
						slotChild.style.height = '0px' // set height to zero
					})
					
					destElements.forEach(el => {
						el.classList.remove('open')
						el.classList.add('closed')
					})
					return
				}
		}
	}

	toggleClass(destEl, cls) {
		if (!Array.isArray(destEl)) destEl = [destEl] // if it's not an array, turn it into one
        destEl.forEach(el => el.classList.toggle(cls)) 
    }

	toggleActive(evt) {
		let iconEl = evt.target.firstElementChild;
		iconEl.classList.toggle('active')

		/* this._slottedChildren.forEach(slotChild => {
			
			slotChild
		}) */

		let nextContent = evt.target.nextElementSibling;

		if (nextContent.classList.contains('closed')) {
			nextContent.style.height = 'auto'; // let the browser calculate the necesarry height
			let height = nextContent.clientHeight + 'px';
			nextContent.style.height = '0px';
			setTimeout(() => {
				nextContent.style.height = height;
			}, 1);
			nextContent.classList.remove('closed')
			nextContent.classList.add('open')
			return
		}
		if (nextContent.classList.contains('open')) {
			nextContent.style.height = '0px';
			nextContent.classList.remove('open')
			nextContent.classList.add('closed')
		}
	}
}

customElements.define("un-accordion", UnAccordion);