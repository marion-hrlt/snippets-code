---
sidebar_position: 1
---

# Base

Voici quelques bouts de code et fonctions de base que j'utilise souvent.

## Les sélecteurs

```js
let element = document.querySelector(".element");
let element = document.querySelector("#element");
let element = document.getElementById("element");

//Requiert un forEach par la suite
let elements = document.querySelectorAll(".elements");
```

## Les boucles

La boucle forEach avec un exemple d'événement appliqué à tous les éléments appelés.

```js
let elements = document.querySelectorAll(".elements");

elements.forEach(function (element) {});

//Si besoin de mettre un événement sur tous les éléments
elements.forEach(function (element) {
	element.addEventListener("click", function () {
		console.log(element);
	});
});
```

## Les évènements

```js
//Cet événement se déclenche au click
element.addEventListener("click", function () {});

//Cet événement se déclenche lorsqu'une touche est enfoncée
element.addEventListener("keyup", function () {});
```

Cet événement est déclenché pour les éléments `<input>`, `<select>`, `<textarea>`, lorsque l'utilisateur modifie la valeur de l'élément.

```js
element.addEventListener("change", function () {});
```

Cet événement se déclenche lorsque le document HTML a été chargé et que tous les scripts ont été éxécutés.

```js
window.addEventListener("DOMContentLoaded", function () {});
```
