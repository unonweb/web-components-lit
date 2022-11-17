import { LitElement, html, render, css } from "lit"

export class UnArrowOne extends LitElement {
    
	static styles = css`
.arrow {
	cursor: pointer;
	height: 120px;
	left: 50%;
	position: absolute;
	top: 50%;
	transition: transform 0.1s ease 0s;
	width: 80px;
}
:host([left]) .arrow {
	transform: rotateY(180deg);
}
.arrow-top, .arrow-bottom {
  background-color: #666;
  height: 4px;
  left: -5px;
  position: absolute;
  top: 50%;
  width: 100%;
}
.arrow-top:after, .arrow-bottom:after {
  background-color: #fff;
  content: "";
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.15s;
}
.arrow-top {
  transform: rotate(45deg);
  transform-origin: bottom right;
}
.arrow-top:after {
  left: 100%;
  right: 0;
  transition-delay: 0s;
}
.arrow-bottom {
  transform: rotate(-45deg);
  transform-origin: top right;
}
.arrow-bottom:after {
  left: 0;
  right: 100%;
  transition-delay: 0.15s;
}
.arrow:hover .arrow-top:after {
  left: 0;
  transition-delay: 0.15s;
}
.arrow:hover .arrow-bottom:after {
  right: 0;
  transition-delay: 0s;
}
.arrow:active {
  transform: translateX(-50%) translateY(-50%) scale(0.9);
}
	`
	
	static properties = {
	}
    
    constructor() {
        super()
    }

	render() {
		return html`
		<div class="arrow">
			<div class="arrow-top"></div>
			<div class="arrow-bottom"></div>
		</div>
		`
	}

    
}

customElements.define('un-arrow-one', UnArrowOne)