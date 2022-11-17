import { LitElement, html, render, css } from "lit"

// server side a hash will be calculated using price and id
// this hash will be checked before confirming the shopping cart 

export class ShoppingCart extends LitElement {
    static properties = {
		cartContent: { type: Array },
	}

    constructor() {
        super()
		this.cartContent = [
			{
				id: 1,
				name: 'Fusskettchen mit Edelsteinen',
				price: 42,
				quantity: 2,
				variation: {
					key: 'Farbe',
					value: 'Grün'
				},
				url: '',
				img: {
					src: '',
					alt: ''
				},
				hash: 123,
			},
			{
				id: 2,
				name: 'Creole',
				price: 10,
				quantity: 1,
				variation: {
					key: 'Farbe',
					value: 'Schwarz'
				},
				url: '',
				img: {
					src: '',
					alt: ''
				},
				hash: 123,
			}
		]

    }

	createRenderRoot() {
		return this
	}

	render() {
		return html`
			<div class="wrapper">
				<h1 class="heading">Warenkorb</h1>
				<table class="table">
					${this.tempTableHead()}
					<tbody class="tbody">
						${this.cartContent.map(product => this.tempTableRow(product))}
					</tbody>
				</table>
			</div>
		`		
	}

	// template methods

	tempTableHead() {
		return html`
		<thead class="thead">
			<tr class="tr">
				<th class="th product-remove">&nbsp;</th>
				<th class="th product-thumbnail">&nbsp;</th>
				<th class="th product-name">Produkt</th>
				<th class="th product-quantity">Anzahl</th>
				<th class="th product-subtotal">Zwischensumme</th>
			</tr>
		</thead>
		`
	}

	tempTableRow(product) {
		return html`
    		<tr class="tr">
				<!-- remove -->
				<td class="td product-remove">
					<input 
						type="button" 
						value="×"
						@click=${evt => this._removeProductCompletely(product)}>
				</td>
				<!-- thumbnail -->
				<td class="td product-thumbnail">
					<a href=${product.url}>
						<img
							src=${product.img.src}
							class="thumbnail"
							alt=${product.img.alt}
							width="70"
							height="90"/>
            		</a>
				</td>
				<!-- name & price & variation -->
				<td class="td product-name">
					<a class="url" href=${product.url}>${product.name}</a>
					<div class="price">${product.price}€</div>
					<div class="variation">
						<span class="variation-key">${product.variation.key}:</span>
						<span class="variation-value">${product.variation.value}</span>
					</div>
				</td>
				<!-- quantity -->
				<td class="td product-quantity">
						<label for="qty ${product.id}"></label>
						<input 
							class="plusminus"	
							type="button" 
							value="–"
							@click=${evt => this._decQuantity(product)}>
						<input
							type="number"
							class="counter"
							id="qty ${product.id}"
							step="1"
							min="0"
							max=""
							name="qty ${product.id}"
							value=${product.quantity}
							title="Menge"
							size="4"
							inputmode="numeric"
							autocomplete="off"
							@change=${evt => this._changeQuantity(evt, product)}>
						<input 
							type="button" 
							value="+" 
							class="plusminus"
							@click=${evt => this._incQuantity(product)}>
				</td>
				<!-- subtotal -->
				<td class="td product-subtotal">
					<div class="price">${this._calcSubtotal(product)}</div>
				</td>
			</tr>
		</tbody>	
		`
	}

	tempCartTotals() {
		return html`
		<div>
			<h2>Warenkorb-Summe</h2>
			<div>Zwischensumme</div>
			<div>Gesamtsumme</div>
		</div>
		`
	}

	// private methods

	_checkProduct(product) {
		if (!product.id) throw Error('missing product.id')
		if (!product.name) throw Error('missing product.name')
		if (!product.price) throw Error('missing product.price')
		if (!product.quantity) throw Error('missing product.quantity')
		if (!product.url) throw Error('missing product.url')
		if (!product.img) throw Error('missing product.img')
		if (!product.variation) throw Error('missing product.variation')
		if (!product.hash) throw Error('missing product.hash')
	}

	_removeProductCompletely(updatedProduct) {
		this.cartContent = this.cartContent.filter(prod => prod.id !== updatedProduct.id)
		//this._updateCartContent(updatedProduct.id)
	}

	_updateCartContent(id) {
		this.requestUpdate()
		console.dir('updated cartContent with: ', this.cartContent.find(prod => prod.id === id))
	}

	_incQuantity(updatedProduct) {
		updatedProduct.quantity++
		this._updateCartContent(updatedProduct.id)
	}

	_decQuantity(updatedProduct) {
		updatedProduct.quantity--
		this._updateCartContent(updatedProduct.id)
	}
	_changeQuantity(evt, updatedProduct) {
		updatedProduct.quantity = Number(evt.target.value)
		this._updateCartContent(updatedProduct.id)
	}

	_calcSubtotal(product) {
		return product.price * product.quantity
	}

	// public methods

	addProduct(product) {
		this._checkProduct(product)
		this.cartContent.push(product)
	}
    
}

customElements.define('un-shopping-cart', ShoppingCart)