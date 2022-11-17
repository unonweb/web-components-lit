import { html } from "lit"
const unArrowLeft = html`
<svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style>
	svg {
		padding: 5px;
		cursor: pointer;
		
		width: 70px;
		height: 90px;
	}
	svg:hover polyline,
	svg:focus polyline {
		stroke-width: 3;
	}
	svg:active polyline {
		stroke-width: 6;
		transition: all 100ms ease-in-out;
	}
	polyline {
		transition: all 250ms ease-in-out;
		fill: none;
		stroke: black;
		stroke-width: 1;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
<polyline points="45.63,75.8 0.375,38.087 45.63,0.375 " />
</svg>`

export default unArrowLeft