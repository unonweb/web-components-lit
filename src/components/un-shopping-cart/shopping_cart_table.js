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
					color: 'Grün'
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
					color: 'Schwarz'
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

	render() {
		return html`
			<div part="wrapper">
				${this.tempHead()}
				<table part="table">
					${this.tempTableHead()}
					<tbody part="table-body">
						${this.cartContent.map(product => this.tempTableRow(product))}
					</tbody>
				</table>
			</div>
		`		
	}

	// template methods

	tempHead() {
		return html`
			<h1 part="heading">Warenkorb</h1>	
		`
	}

	tempTableHead() {
		return html`
		<thead part="table-head">
			<tr>
				<th class="product-remove">&nbsp;</th>
				<th class="product-thumbnail">&nbsp;</th>
				<th class="product-name">Produkt</th>
				<th class="product-price">Preis</th>
				<th class="product-quantity">Anzahl</th>
				<th class="product-subtotal">Zwischensumme</th>
			</tr>
		</thead>
		`
	}

	tempTableRow(product) {
		return html`
    		<tr part="table-row">
				<!-- remove -->
				<td part="product-remove">
					<a
						href=""
						class="remove"
						aria-label="Dieses Produkt entfernen"
						data-product_id=${product.id}>×
					</a>
				</td>
				<!-- thumbnail -->
				<td part="product-thumbnail">
					<a href=${product.url}>
						<img
							src=${product.img.src}
							part="thumbnail"
							alt=${product.img.alt}
							width="70"
							height="90"/>
            		</a>
				</td>
				<!-- name & price-->
				<td part="product-name">
					<a href=${product.url}>${product.name}</a>
					<span part="price">${product.price}€</span>
					<dl part="variation">
						<dt part="variation-color">Farbe:</dt>
						<dd>${product.variation.color}</dd>
					</dl>
				</td>
				<!-- quantity -->
				<td class="product-quantity">
					<div class="">
						<label for="qty ${product.id}"></label>
						<input type="button" value="–" class="plusminus minus" /><input
							type="number"
							id="qty ${product.id}"
							class="input-text qty text"
							step="1"
							min="0"
							max=""
							name="cart[2b9d38d470f869ea50d351911f64f825][qty]"
							value="2"
							title="Menge"
							size="4"
							placeholder=""
							inputmode="numeric"
							autocomplete="off"
						/><input type="button" value="+" class="plusminus plus" />
					</div>
				</td>
				<!-- subtotal -->
				<td class="product-subtotal">
					<div class="price">${this._calcSubtotal(product)}</div>
				</td>
			</tr>
		</tbody>	
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

	_removeProductCompletely(product) {
		this.cartContent.find(product => product.id)
	}

	_incQuantity(product) {
		this.cartContent.find(product => product.id)
	}

	_decQuantity(product) {
		this.cartContent.find(product => product.id)
	}

	_calcSubtotal(product) {
		this.cartContent.find(product => product.id)
	}

	// public methods

	addProduct(product) {
		this._checkProduct(product)
		this.cartContent.push(product)
	}
    
}

customElements.define('un-shopping-cart', ShoppingCart)