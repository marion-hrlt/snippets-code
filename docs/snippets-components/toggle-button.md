---
sidebar_position: 1
---

# Toggle Button

Un exemple de bouton toggle

## HTML

```html
<div class="toggle">
	<input type="checkbox" id="toggle-btn" />
	<label for="toggle-btn"></label>
</div>
```

## CSS

```css
.toggle {
	position: relative;
	width: 60px;
	height: 34px;
	margin: 20px;
}

.toggle input[type="checkbox"] {
	opacity: 0;
	width: 0;
	height: 0;
}

.toggle label {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
	background-color: #ddd;
	border-radius: 34px;
	transition: background-color 0.4s ease;
}

.toggle label:after {
	content: "";
	position: absolute;
	top: 4px;
	left: 4px;
	width: 26px;
	height: 26px;
	border-radius: 50%;
	background-color: #fff;
	transition: transform 0.4s ease;
}

.toggle input[type="checkbox"]:checked + label {
	background-color: #00bfff;
}

.toggle input[type="checkbox"]:checked + label:after {
	transform: translateX(26px);
}
```

## JavaScript

```js
const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("change", () => {
	if (toggleBtn.checked) {
		document.body.classList.add("dark-theme");
	} else {
		document.body.classList.remove("dark-theme");
	}
});
```
