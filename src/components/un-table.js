import { LitElement, html, render, css } from "lit"

/* creates a table from any array of objects called 'rows' that's passed to it.
The properties printed by the table are selected by an array of 'columns'. 
IT IS NOT POSSIBLE to inject any html template into any cell currently. JUST TEXT */

/* IN FUTURE controls to manipulate the table are going to be added, like
- rulers to change the size of columns
- sorting possibilities
*/

export default class UnTable extends LitElement {
    static properties = {
		columns: { type: Array },
		rows: { type: Array },
		delete: { type: Boolean, attribute: true },
		layout: { type: String, attribute: true }
	}

    constructor() {
        super()
		// init props
		this.layout = 'columns' // 'grid', 'rows'
    }

	render() {
		if (this.layout === 'columns') return html`${this.renderColumns()}`
		if (this.layout === 'rows') return html`${this.renderRows()}`
		if (this.layout === 'grid') return html`${this.renderGrid()}`
	}

	renderGrid() {

		return html`
			<link rel="stylesheet" href='/components/un-table--grid.css'>
			
			${this.columns.map(col => {
				return html`
					<div class="header cell">${col}</div>
				`
			})}

			${this.rows.map(row => {
				return html`
					<input
						class="ctrl-delete"
						type="button" 
						value="×"
						@click=${evt => console.log('click')}>
					<!-- body -->
					${this.columns.map(col => {
						return html`
							<div class="body cell col-${col}">${row[col]}</div>
						`
					})}
				`
			})}
		`		
	}

	renderRows() {
		// creates a flex table based on rows

		return html`
			<link rel="stylesheet" href='/components/un-table--row.css'>
			
			<!-- header -->
			<div class="row">
				${this.columns.map((col, index) => {
					return html`
						<div class="header cell col-${index}">${col}</div>
						`
					})}
			</div>
			<!-- body -->
			${this.rows.map(row => {
				return html`
					<div class="row">
						${this.columns.map((col, index) => {
							return html`
								<div class="body cell col-${index}">${this.createTemplate(row, col)}</div>
							`
						})}
					</div>
				`
			})}
		`		
	}

	renderColumns() {
		// creates a flex table based on columns
		// pros: column sizing is easy
		// cons: 

		return html`
			<link rel="stylesheet" href='/components/un-table--col.css'>
			
			${this.columns.map(col => {
				return html`
					<div class="col">
						<!-- header -->
						<div class="header cell">${col}</div>
						<!-- body -->
						${this.rows.map(row => {
							return html`
								<div class="body cell col-${col}">${row[col]}</div>
							`
						})}
					</div>
				`
			})}
		`		
	}

	/* experimental: maybe here insert html template into cells? */
	createTemplate(row, col) {
		switch (col) {
			case 'quantity':
				return html`
					<label for="qty ${row.id}"></label>
						<input 
							class="plusminus"	
							type="button" 
							value="–"
							@click=${() => this._decQuantity(row)}>
						<input
							type="number"
							class="counter"
							id="qty ${row.id}"
							step="1"
							min="0"
							max=""
							name="qty ${row.id}"
							value=${row.quantity}
							title="Menge"
							size="4"
							inputmode="numeric"
							autocomplete="off"
							@change=${evt => this._changeQuantity(evt, row)}>
						<input 
							type="button" 
							value="+" 
							class="plusminus"
							@click=${() => this._incQuantity(row)}>
			`
			default:
				return html`${row[col]}`
		}
	}   
}

customElements.define('un-table', UnTable)

