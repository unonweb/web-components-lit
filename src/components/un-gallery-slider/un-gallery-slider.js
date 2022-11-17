import { LitElement, html, render, css } from "lit"
import { UnArrowTwo } from "./un-arrow-two"

export class UnGallerySlider extends LitElement {
    static properties = {
		slottedElements: { type: Array },
	}

	static styles = css`
::slotted(img.show) {
	opacity: 1 !important;
	object-fit: cover;
	/* width: 100vw !important; */
	height: 80vh !important;
}
.bullet-current {
	background-color: #682f2f;
}
	`
    
    constructor() {
        super()
		this.currentImg = 0
    }

	firstUpdated() {
		let slots = this.shadowRoot.querySelector('slot')
		this.slottedElements = slots.assignedElements({flatten: true})
		this.slottedElements[0].classList.add('show')
	}

	render() {
		// is called when this.slottedElements changes
		console.log('[render] slottedElements: ', this.slottedElements)
		return html`
			<div part="wrapper">
				<un-arrow-two exportparts="arrow:sym left:prev right:next svg polyline" left part="sym prev" @click=${this.prev}></un-arrow-two>
				<slot part="img"></slot>
				<un-arrow-two right part="sym next" @click=${this.next}></un-arrow-two>
				<div part="bullets-wrapper">
					${this._createBullets()}
				</div>
			</div>
		`
	}

	next() {
		if (this.currentImg === this.slottedElements.length - 1) return // return if last img in array
		this.slottedElements[this.currentImg].classList.remove('show') // hide current img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.remove('bullet-current') // hide current bullet
		this.currentImg++
		this.slottedElements[this.currentImg].classList.add('show') // show new img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.add('bullet-current') // show new bullet
	}

	prev() {
		if (this.currentImg === 0) return
		this.slottedElements[this.currentImg].classList.remove('show') // hide current img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.remove('bullet-current') // hide current bullet
		this.currentImg--
		this.slottedElements[this.currentImg].classList.add('show') // show new img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.add('bullet-current') // show new bullet
	}

	jumpToImage(evt) {
		this.slottedElements[this.currentImg].classList.remove('show') // hide current img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.remove('bullet-current') // hide current bullet
		this.currentImg = Number(evt.target.dataset.index)
		this.slottedElements[this.currentImg].classList.add('show') // show new img
		this.shadowRoot.querySelector(`#bullet-${this.currentImg}`).classList.add('bullet-current') // show new bullet
	}

	_createBullets() {
		// bullets are created in the second call of render()
		if (!this.slottedElements) return ""
		// bullets are related to image index by their id
		return html`
			${this.slottedElements.map((item, index) => {
				let cls = (index === this.currentImg) ? 'bullet-current' : ''
				return html`
					<div 
						part="bullet"
						class=${cls}
						id="bullet-${index}"
						data-index=${index}
						@click=${evt => this.jumpToImage(evt)}>
					</div>
				`
			})}
			`
	}
}

customElements.define('un-gallery-slider', UnGallerySlider)