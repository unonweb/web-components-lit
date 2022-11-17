import { LitElement, html, render, css} from "lit"
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

export default class UnShowcase extends LitElement {
    static properties = {
		// properties
		products: { type: Object, attribute: false },
		categories: { type: Object, attribute: false },
		imgDir: { type: String, attribute: false },
		// interal
		_filters: { type: Object, attribute: false }, // array of objects of filters
		// public attributes
		lang: { type: String },
		page:  { type: String },
		ui: { type: String, attribute: true, reflect: true }, // 'search-name', 'search-description', 'select-category'
	}

    constructor() {
        super()
		
		// init public properties
		//this.ui = ['search-name', 'search-description', 'select-category']
		//console.log('this.ui: ', this.ui)

		// init private properties
		this._filters = {
			category: '',
			name: '',
			description: '',
		}
    }

	render() {
		console.log('render()')
		return html`
			<link rel="stylesheet" href="/components/un-showcase.css">
			${this.renderCategories()}
			${this.renderSidebar()}
			${this.renderProducts()}
		`
	}

	renderSidebar() {

		// 'search-name'
		let searchByName
		if (this.ui.includes('search-name')) {
			searchByName = html `
				<label>Search by name:
					<input 
						type="search" 
						@change=${evt => this.updateFilters('name', evt.target.value)}
						id="sidebar-search-name">
				</label>
			`
		}
		// 'search-description'
		let searchByDescription
		if (this.ui.includes('search-description')) {
			searchByDescription = html `
				<!-- des -->
				<label>Search by description:
					<input 
						type="search" 
						@change=${evt => this.updateFilters('description', evt.target.value)}
						id="sidebar-search-desc">
				</label>
			`
		}
		// select-category
		let selectCategory
		if (this.ui.includes('select-category')) {
			let categories = this.categories[this.lang].docs
			selectCategory = html`
				<fieldset>
  					<legend>Filter by category: </legend>
					<div id="sidebar-categories">
						${categories.map(item => {
						// loop through categories
						return html`
							<label>${item.name}
								<input 
									type="checkbox" 
									value=${item.id}
									id=${item.id}
									?checked=${this._filters.category === item.id}
									@change=${() => this.updateFilters('category', item.id)}>
							</label>
						`
						})}	
					</div>
				</fieldset>
			`
		}
		// final sidebar
		if (searchByName || selectCategory || searchByDescription) {
			return html`
				<aside id="sidebar">
					${searchByName}
					${searchByDescription}
					${selectCategory}
				</aside>
			`
		}
	}

	renderCategories() {
		if (this.ui.includes('categories')) {
			let categories = this.categories[this.lang].docs
			return html`
				<div id="categories">
					${categories.map(item => {
						// loop through categories
						return html`
							<button class="category" 
								@click=${evt => {
									this.shadowRoot.querySelectorAll('.category').forEach(el => {
										if (el.contains(evt.target)) {
											el.classList.toggle('category--selected')
										} else {
											el.classList.remove('category--selected')
										}
									})
									this.updateFilters('category', item.id)
								}}>
								${this.createImgSrcSetEl(item.image)}
								<a>${item.name}</a>
							</button>
						`
					})}
				</div>
			`
		}
	}

	renderProducts() {
		let products = this.products[this.lang].docs // select language
		products = this.filterByCategory(this._filters.category, products)
		products = this.filterByDescription(this._filters.description, products)
		products = this.filterByName(this._filters.name, products)
		return html`
			<div id="products">
				${products.map(item => {
					// loop through products
					return html`
						<div class="product">
							<un-gallery arrows="false" onhover="swap" transfx="blend" bullets=false thumbnails="0" page=${this.page}>
								${this.createImgSrcSetEl(item.images[0].image)}
								${this.createImgSrcSetEl(item.images[1].image)}
							</un-gallery>
							<div class="product-info">
								<a class="product-name">${item.name}</a>
								<a class="product-category">${item.category.name}</a>
								<div class="product-price">${item.price} €</div>
								${this.createSearchMatch(item.match)}
							</div>
						</div>
					`
				})}
			</div>
		`
	}

	updateFilters(type = '', val = '') {

		if (this._filters[type] === val) {
			// if this value is already set - remove it
			this._filters[type] = ''
		} else {
			this._filters[type] = val
			console.log(`[updateFilters] ${this._filters[type]} = ${val}`)
		}

		this.requestUpdate()
	}

	filterByCategory(catId, products) {
		if (!catId) return products
		return products.filter(prod => prod.category.id === catId)
	}

	filterByDescription(searchStr, products) {
		if (!searchStr) return products
		return products.filter((prod, prodIndex) => {
			let matchIndex = prod.contentHtml.toLowerCase().search(searchStr.toLowerCase())
			if (matchIndex !== -1) {
				let match = prod.contentHtml.slice(matchIndex, matchIndex + 50)
				prod.match = match // add a match property to corresponding product
				return true
			}
		})
	}

	filterByName(searchStr, products) {
		if (!searchStr) return products
		return products.filter(prod => prod.name.toLowerCase().includes(searchStr.toLowerCase()))
	}

	createSearchMatch(match) {
		if (!match) return ''
		return html`
			<h5>Beschreibung</h5>
			<div class="product-search-match">...${match}...</div>
		`
	}

	createImgSrcSetEl(payloadImgObj) {
        
		let imgFormats = payloadImgObj?.sizes ?? false // should be an array of img sizes
		if (!imgFormats) {
			console.error('[createImgEl] payloadImgObj?.sizes is false')
			return ""
		}
		// if there is an img...
		let img1920Str = (Object.keys(imgFormats.img1920).length !== 0) ? `${this.imgDir}${imgFormats.img1920.filename} 1920w, ` : ""
		let img1600Str = (Object.keys(imgFormats.img1600).length !== 0) ? `${this.imgDir}${imgFormats.img1600.filename} 1600w, ` : ""
		let img1366Str = (Object.keys(imgFormats.img1366).length !== 0) ? `${this.imgDir}${imgFormats.img1366.filename} 1366w, ` : ""
		let img1024Str = (Object.keys(imgFormats.img1024).length !== 0) ? `${this.imgDir}${imgFormats.img1024.filename} 1024w, ` : ""
		let img768Str = (Object.keys(imgFormats.img768).length !== 0) ? `${this.imgDir}${imgFormats.img768.filename} 768w, ` : ""
		let img640Str = (Object.keys(imgFormats.img640).length !== 0) ? `${this.imgDir}${imgFormats.img640.filename} 640w, ` : ""
		let imgOriginal = `${this.imgDir}${payloadImgObj.filename}`
	
		return html`
			<img
				srcset="${img1920Str}${img1600Str}${img1366Str}${img1024Str}${img768Str}${img640Str}${imgOriginal}"
				sizes="
					(max-width: 640px) 640px, 
					(max-width: 768px) 768px, 
					(max-width: 1024px) 1024px,
					(max-width: 1366px) 1366px,
					(max-width: 1600px) 1600px,
					1920px"
			>`
	}

    
}

customElements.define('un-showcase', UnShowcase)