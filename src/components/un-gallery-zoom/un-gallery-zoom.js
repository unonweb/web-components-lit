import { LitElement, html, render, css } from "lit"

export class UnGalleryZoom extends LitElement {
	// all images are shown as thumbnails
	// one image is additionally shown as showcased

	static styles = css`
.showcase-down {
    transform: translateY(100%);
	opacity: 0;
}
.showcase-up {
    transform: scale(1);
	opacity: 1;
}`
    
	static properties = {
		effect: { type: String, reflect: true },
	}
	
	constructor() {
        super()
    }

	firstUpdated() {
		// VARIABLES
		let thumbnailSlot = this.shadowRoot.querySelector('slot')
		this.slottedThumbnails = thumbnailSlot.assignedElements({flatten: true})
		this.showCaseDown = this.shadowRoot.querySelector('#showcase-down-img')
		this.showCaseUp = this.shadowRoot.querySelector('#showcase-up-img')

		// put first slotted img into showcase
		this.showCase(this.slottedThumbnails[0])

		// add event listeners to each thumbnail img:
		this.slottedThumbnails.forEach(el => {
			el.addEventListener('click', evt => this.showCase(evt.target))
		})

		// showcase
		//this.slottedShowcaseImg = this.shadowRoot.querySelector('slot[name=showcase]').assignedElements()[0]
		
		//this.addShowCaseEffect()
	}

	render() {
		return html`
		<div part="wrapper">
			<div part="thumbnails">
				<slot></slot>
			</div>
			<!-- image container -->
			<div part="showcase">
				<img part="showcase-up-img" id="showcase-up-img" src="">
				<img part="showcase-down-img" id="showcase-down-img" src="" class="showcase-down">
    		</div>
		</div>
		`
	}

	addShowCaseEffect() {
		let effect = this.shadowRoot.host.getAttribute('effect')

		switch (effect) {
			case 'zoom':
				this.showCaseDown.classList.add('effect-zoom')
				break
			case 'wipe':
				this.showCaseDown.classList.add('effect-wipe')
				break
		}
	}

	showCase(thumbnailImg) {

		// old showcase up
		this.showCaseUp.classList.remove('showcase-up')
		this.showCaseUp.classList.add('showcase-down') // the upper image is faded out
		console.log('showCaseUp: ', this.showCaseUp.classList)
		console.log('showCaseDown: ', this.showCaseDown.classList)

		this.showCaseDown.src = this.showCaseUp.src // image is moved from upo to down
		
		setTimeout(() => {
			// new showcase up
			this.showCaseUp.src = thumbnailImg.src
			this.showCaseUp.classList.remove('showcase-down')
			this.showCaseUp.classList.add('showcase-up')
			console.log('showCaseUp: ', this.showCaseUp.classList)
			console.log('showCaseDown: ', this.showCaseDown.classList)
		}, 500)

		
	}
}

customElements.define('un-gallery-zoom', UnGalleryZoom)