import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators/custom-element.js'
import { state } from 'lit/decorators/state.js'
// import functions
import * as functions from '../modules/functions.js'
// import data
import jsonHeader from '../assets/json/headerImg.json' assert {type: 'json'}

//console.dir(jsonHeaderPayload)

@customElement('un-header')
export class UnHeader extends LitElement {

	static styles = css`
:host {
	margin: auto;
	width: 30%;
	display: block;
}
header img {
	margin: auto;
	width: 100%;
}
  	`

	@state()

  	render() {
		console.log('render()')

		let img: PayloadImgs = jsonHeader.image

    	return html`
      		<header>
				${functions.createImgSrcSetEl(img)}
			</header>
    	`
  }
}
