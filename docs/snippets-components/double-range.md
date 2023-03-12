---
sidebar_position: 2
---

# Double Range Slider

## HTML

```html
<div class="wrapper">
	<div class="double-range">
		<div class="slider-track"></div>
		<input type="range" min="0" max="100" value="30" id="slider-1" oninput="slideOne()" />
		<input type="range" min="0" max="100" value="70" id="slider-2" oninput="slideTwo()" />
	</div>

	<div class="values">
		<span id="range1">0</span>
		<span id="range2">100</span>
	</div>
</div>
```

## CSS

```css
.wrapper {
	position: relative;
	width: 100%;
}

.double-range {
	position: relative;
	width: 100%;
	height: 20px;
	margin-bottom: 10px;
}

input[type="range"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 100%;
	outline: none;
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	background-color: transparent;
	pointer-events: none;
}
.slider-track {
	width: 100%;
	height: 5px;
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track {
	-webkit-appearance: none;
	height: 5px;
}
input[type="range"]::-moz-range-track {
	-moz-appearance: none;
	height: 5px;
}
input[type="range"]::-ms-track {
	appearance: none;
	height: 5px;
}
input[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 1.7em;
	width: 1.7em;
	background-color: #3264fe;
	cursor: pointer;
	margin-top: -9px;
	pointer-events: auto;
	border-radius: 50%;
}
input[type="range"]::-moz-range-thumb {
	-webkit-appearance: none;
	height: 1.7em;
	width: 1.7em;
	cursor: pointer;
	border-radius: 50%;
	background-color: #3264fe;
	pointer-events: auto;
	border: none;
}
input[type="range"]::-ms-thumb {
	appearance: none;
	height: 1.7em;
	width: 1.7em;
	cursor: pointer;
	border-radius: 50%;
	background-color: #3264fe;
	pointer-events: auto;
}
input[type="range"]:active::-webkit-slider-thumb {
	background-color: #ffffff;
	border: 1px solid #3264fe;
}

.values {
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #3264fe;
}
```

## JavaScript

```js
window.onload = function () {
	slideOne();
	slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
	if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
		sliderOne.value = parseInt(sliderTwo.value) - minGap;
	}
	displayValOne.textContent = sliderOne.value;
	fillColor();
}
function slideTwo() {
	if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
		sliderTwo.value = parseInt(sliderOne.value) + minGap;
	}
	displayValTwo.textContent = sliderTwo.value;
	fillColor();
}
function fillColor() {
	percent1 = (sliderOne.value / sliderMaxValue) * 100;
	percent2 = (sliderTwo.value / sliderMaxValue) * 100;
	sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
```
