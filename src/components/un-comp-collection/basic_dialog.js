/* import using bare module resolver */
import { LitElement, html } from 'lit'
import {classMap} from 'lit/directives/class-map.js';

class MyDialog extends LitElement {

	constructor() {
		super()
		this.opened = false
	}

	static properties = {
		opened: { type: Boolean }
	}

	render() {
		return html`
<style>
.opened {
    display: flex;
}
.closed {
    display: none;
}
.dialog {
    flex-direction: column;
    border: 2px outset black;
    padding: 1em;
    margin: 1em;
}
.buttons {
    display: flex;
    flex-direction: row;
}
.accept {
    justify-content: space-around;
    align-content: space-around;
}
.cancel {
    justify-content: space-around;
    align-content: space-around;
}
</style>
<div class="${classMap({ dialog: true, opened: !this.opened, closed: this.opened })}">
    <h1 class="title ">Title</h1>
    <p class="content">This is a dialog</p>
    <div class="buttons">
      <button class="accept" @click="${() => this.dispatchEvent(new CustomEvent('dialog.accept'))}">Ok</button>
      <button class="cancel" @click="${() => this.dispatchEvent(new CustomEvent('dialog.cancel'))}">Cancel</button>    
    </div>
</div>`
	}
}

class MyApp extends LitElement {
	constructor() {
		super()
		this.dialogVisible = false
	}

	static properties = {
		dialogVisible: { type: Boolean }
	}

	render() {
		console.log('Dialog visible:', this.dialogVisible)
		return html`
<div>
	<button @click="${this.toggleDialog.bind(this)}">Toggle dialog</button>
	<my-dialog ?opened="${this.dialogVisible}" 
		@dialog.accept="${this.closeDialog.bind(this)}"
		@dialog.cancel="${this.closeDialog.bind(this)}">
	</my-dialog>
</div>`
	}

	toggleDialog(e) {
		this.dialogVisible = !this.dialogVisible
		console.log(this.dialogVisible)
	}

	closeDialog(e) {
		console.log(e)
		this.dialogVisible = false
	}
}

customElements.define('my-app', MyApp)
customElements.define('my-dialog', MyDialog)
