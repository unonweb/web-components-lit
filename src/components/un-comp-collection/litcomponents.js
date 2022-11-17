import { LitElement, html, render, css } from "lit";
import {sharedStyles} from    './styles/shared_styles.js'

class Counter1 extends LitElement {
	static properties = {
		count: {
			type: Number,
		},
	};

	static styles = css`
        :host {
            display: inline-block;
            margin: 15px;
        }
        span {
            margin-left: 0.2vw;
            margin-right: 0.2vw;
        }
    `;

	constructor() {
		super();
		this.count = 0
	}

	render() {
		return html`
            <button @click="${this.decrement}">&#8722;</button>
            <span>${this.count}</span>
            <button @click="${this.increment}">+</button>
        `;
	}

	increment(evt) {
		this.count++
	}

	decrement(evt) {
		this.count--
	}
}

class MenuX1 extends LitElement {
	static styles = css`
        
        :host {
            --color-trig: #ac4d4d;
            --color-content: #184e7d;
            --size-trig: 60px;
            --common-padding: 5px;
        }

        #menu {
            position: relative;
            padding: 5px;
            width: fit-content;
        }
        /* if active */

        #trig.active #one {
            transform: translate(0, 14px) rotate(45deg);
        }

        #trig.active #two {
            background-color: transparent; /* makes it disappear */
            box-shadow: none;
            transform: translateX(-55px);
        }

        #trig.active #three {
            transform: translate(0, -14px) rotate(-45deg);
        }

        /* if not active */

        #trig {
            cursor: pointer;
            width: var(--size-trig);
            z-index: 5;
            position: relative;
            margin: 5px;
            padding: var(--common-padding);
        }

        #trig .bar {
            background-color: var(--color-trig);
            border-radius: 25px;
            box-shadow: 0px 3px 13px rgba(0, 0, 0, 0.3);
            height: 7px;
            transition-duration: 250ms;
            transition-timing-function: cubic-bezier(0.13, 0.24, 0.35, 1.64);
        }

        #trig .bar#one,
        #trig .bar#two {
            margin-bottom: 7px;
        }

        #content {
            position: absolute;
            top: 0px;
            opacity: 0;
            background-color: var(--color-content);
            border-radius: 8px;
            padding: var(--common-padding);
            z-index: -1;
        }

        #content.active {
            opacity: 1;
            z-index: 2;
        }

        .item {
            display: block;
            text-decoration: underline;
            font-family: sans;
            font-size: medium;
            width: max-content;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: calc(var(--size-trig) + 30px);
            padding-right: 10px;
            margin-bottom: 5px;
            font-weight: bold;
            color: white;
            text-decoration-color: var(--color-trig);
        }

        .item:hover {
            color: var(--color-trig);
        }
    `;
	constructor() {
		super();
	}

	render() {
		return html` <div id="menu">
            <div id="trig" @click="${this.toggleActive}">
                <div id="one" class="bar"></div>
                <div id="two" class="bar"></div>
                <div id="three" class="bar"></div>
            </div>
            <div id="content">
                <a class="item" href="#">Section 01</a>
                <a class="item" href="#">Section 02</a>
                <a class="item" href="#">Section 03</a>
                <a class="item" href="#">Section 04</a>
            </div>
        </div>`;
	}

	firstUpdated() {
		this.trigEl = this.shadowRoot.querySelector("#trig");
		this.contEl = this.shadowRoot.querySelector("#content");
	}

	toggleActive(evt) {
		this.trigEl.classList.toggle("active");
		this.contEl.classList.toggle("active");
		//this.renderRoot.querySelector("#menu__toggle").classList.toggle('active')
		//console.log('toggleActive called')
	}
}

class MenuDropDown2 extends LitElement {

	static styles = css`
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

*,
*::before,
*::after {
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
	font-size: 15px;
	font-weight: 500;
}

:host {
	position: relative;
}

a {
	position: relative;
	color: #fff;
	transition: all 200ms linear;
	border-radius: 2px;
	padding: 5px 0;
	padding-left: 20px;
	padding-right: 15px;
	margin: 2px 0;
	text-align: left;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

a:hover {
	color: #102770;
	background-color: #ffeba7;
}

.drop-symbol {
	margin-left: 15px;
}

.drop-header {
	height: 50px;
	transition: all 200ms linear;
	border-radius: 4px; /* round the corners a bit */
	width: 220px;
	letter-spacing: 1px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: #ffeba7;
	cursor: pointer;
	color: #102770;
}

.drop-header .drop-symbol {
	/* the arrow symbol */
	transition: transform 200ms linear;
}

.drop-content {
	max-width: fit-content;
	padding: 5px;
	background-color: #111;
	border-radius: 4px;
	display: block;
	box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.4);
	z-index: 2;
	opacity: 0; /* hide it */
	pointer-events: none;
	transform: translateY(20px); /* make it appear from bellow */
	transition: all 200ms linear; /* transition */
	margin-top: 10px;
	position: absolute;
}

.drop-content:after {
	/* the arrow */
	position: absolute;
	top: -7px;
	left: 30px;
	width: 0;
	height: 0;
	border-left: 8px solid transparent;
	border-right: 8px solid transparent;
	border-bottom: 8px solid #111;
	content: '';
	display: block;
	z-index: 2;
	transition: all 200ms linear; /* transition */
}

/* if header is active */

.drop-header.active .drop-symbol {
	/* the arrow symbol if open*/
	transform: rotate(180deg);
}

.drop-content.active {
	opacity: 1; /* show it */
	pointer-events: auto;
	transform: translateY(0);
}

/* sub menu */

.drop-sub-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	color: #fff;
	transition: all 200ms linear; /* transition */
	border-radius: 2px;
	padding: 5px 0;
	padding-left: 20px;
	padding-right: 15px;
	text-align: left;
	text-decoration: none;
	cursor: pointer;
}

.drop-sub-header:hover {
	color: #102770;
	background-color: #ffeba7;
}

.drop-sub-header .drop-symbol {
	transition: transform 200ms linear;
}

.drop-sub-content {
	position: relative;
	display: block;
	width: 100%;
	pointer-events: none;
	opacity: 0;
	max-height: 0;
	padding-left: 10px;
	padding-right: 3px;
	overflow: hidden;
	transition: all 200ms linear; /* transition */
}

.drop-sub-content a {
	font-size: 14px;
}

/* if sub-header is active */

.drop-sub-header.active .drop-symbol {
	transform: rotate(90deg);
}

.drop-sub-content.active {
	pointer-events: auto;
	opacity: 1;
	max-height: 999px;
}
`;

	constructor() {
		super();
	}

	render() {
		return html` 
		<div class="drop-header" @click="${this.toggleHeader}">Dropdown Menu <span class="drop-symbol">&#8593;</span></div>
		<div class="drop-content">
			<a class="drop-item" href="#">Dropdown Link <span class="drop-symbol">&#8594;</span></a>
			<div class="drop-sub-header" @click="${this.toggleSubHeader}">Dropdown Sub <span class="drop-symbol">&#43;</span></div>
			<div class="drop-sub-content">
				<a class="drop-item" href="#">Dropdown Link<span class="drop-symbol">&#8594;</span></a>
				<a class="drop-item" href="#">Dropdown Link<span class="drop-symbol">&#8594;</span></a>
			</div>
			<a class="drop-item" href="#">Dropdown Link <span class="drop-symbol">&#8594;</span></a>
			<a class="drop-item" href="#">Dropdown Link <span class="drop-symbol">&#8594;</span></a>
		</div>`;
	}

	firstUpdated() {
		this.headerEl = this.shadowRoot.querySelector('.drop-header')
		this.subHeaderEl = this.shadowRoot.querySelector('.drop-sub-header')
		this.contentEl = this.shadowRoot.querySelector('.drop-content')
		this.subContentEl = this.shadowRoot.querySelector('.drop-sub-content')
	}

	toggleHeader(evt) {
		//this.headerEl.classList.toggle('drop-header--open')
		//this.contentEl.classList.toggle('drop-content--open')
		this.headerEl.classList.toggle('active')
		this.contentEl.classList.toggle('active')
	}

	toggleSubHeader(evt) {
		//this.subHeaderEl.classList.toggle('drop-sub-header--open')
		//this.subContentEl.classList.toggle('drop-sub-content--open')
		this.subHeaderEl.classList.toggle('active')
		this.subContentEl.classList.toggle('active')
	}
}

class MenuDropDown3 extends LitElement {

	static style2 = css`
:host {
	display: block;
	font-family: 'Raleway', sans-serif;
	margin-top: 40px;
	position: relative;
	width: 50vw;
	min-width: 320px;
	height: 200px;
}

.drop-header {
	border-radius: 2px;
	position: relative;
	background: tomato;
	margin-bottom: 10px;
	height: 40px;
	box-shadow: 4px 4px 20px -2px rgba(0, 0, 0, .35);
	cursor: pointer;
	transition: all .4s;
	/* font */
	font-weight: 200;
	text-transform: uppercase;
	color: ivory;
	/* flex */
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
}

.drop-header:hover {
	transform: translateY(-2px); /* move it a little bit up when hovering */
	box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .35);
}

.drop-header:hover:active {
	transform: translateY(10px); /* move it a little bit down when clicked */
	box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, .35);
}

.drop-content--open {
	height: 100%;
}

.drop-content--closed {
	height: 0%;
}

.drop-content {
	padding-left: 0;
	padding-top: 0;
	margin-top: 0;
	list-style: none;
	overflow: hidden;
	text-align: right;
	margin-bottom: 22px;
	text-align: center;
	transition: all .4s ease-out;
}

.drop-content li {
	border-radius: 2px;
	position: relative;
	display: inline-block;
	margin-left: 35px;
	line-height: 1.5;
	width: 100%;
	margin: 0;
	margin-bottom: 5px;
	background: tomato;
	transition: background 3s;
	box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, .35);
}

.drop-content li:hover {
	background: mediumorchid;
	transition: background .45s;
}

.drop-content a {
	display: block;
	color: ivory;
	text-transform: lowercase;
	font-size: 18px;
	font-weight: 200;
	text-decoration: none;
	transition: color .3s;
}
`
	static styles = css`${this.style2}`

	constructor() {
		super()
	}

	render() {
		return html`
		<div class="drop-header" @click="${this.toggleActive}">Drop Down Menu</div>
		<ul class="drop-content drop-content--closed">
			<li><a href="#">Section 01</a></li>
			<li><a href="#">Section 02</a></li>
			<li><a href="#">Section 03</a></li>
			<li><a href="#">Section 04</a></li>
		</ul>`
	}

	firstUpdated() {
		this.contentEl = this.shadowRoot.querySelector('.drop-content')
	}

	toggleActive(evt) {
		this.contentEl.classList.toggle('drop-content--open')
		this.contentEl.classList.toggle('drop-content--closed')
	}
}




customElements.define("counter-1", Counter1);
customElements.define("menu-x-1", MenuX1);
customElements.define("menu-drop-down-2", MenuDropDown2);
customElements.define("menu-drop-down-3", MenuDropDown3);