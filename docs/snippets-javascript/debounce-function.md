---
sidebar_position: 2
---

# Debounce

La fonction `debounce` permet de déclencher l'appel à une fonction après un certain délai. Par exemple, on peut écouter la frappe d'un utilisateur dans un champ texte, mais ne vouloir appeler notre callback seulement si l'utilisateur marque une pause suffisamment longue.

Voici un exemple de code pour cette fonction :

```js
/**
 *
 * @param {callback} callback
 * @param {number} delay
 * @returns void
 */
function debounce(callback, delay) {
	var timer;
	return function () {
		var args = arguments;
		var context = this;
		clearTimeout(timer);
		timer = setTimeout(function () {
			callback.apply(context, args);
		}, delay);
	};
}
```

Ensuite, voici un exemple de son utilisation :

```js
element.addEventListener(
	"keyup",
	debounce(function (e) {
		// Le code ici sera exécuté au bout de 350 ms
		// mais si l'utilisateur tape une nouvelle fois dans cet intervalle de temps, le timer sera réinitialisé
	}, 350)
);
```
