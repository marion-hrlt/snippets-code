---
sidebar_position: 2
---

# Requête Ajax

Comment faire une requête Ajax avec WordPress et JS (Vanilla) ?

## Déclaration du script

En premier temps, faire un appel de son fichier JS

```php title='functions.php'

add_action('wp_enqueue_scripts', 'enqueue_my_assets', 10);

function enqueue_my_assets(){
	wp_enqueue_script('my_scripts', get_stylesheet_directory_uri() . 'assets/dist/js/front.min.js');
}
```

Ensuite, il faut créer une variable qu'on pourra appeler en JS. Pour cela, nous allons utiliser la fonction `wp_localize_script()`de WordPress. Par exemple ici une variable `ma_variable`appelant l'admin ajax de WordPress.
Nous pourrons ensuite l'appeler dans notre fichier JS avec `ma_variable.ajax_url`

```php title='functions.php'
function enqueue_my_assets(){
	wp_enqueue_script('my_scripts', get_stylesheet_directory_uri() . 'assets/dist/js/front.min.js');

	// highlight-start
	wp_localize_script('my_scripts', 'ma_variable', [
		'ajax_url' => admin_url('admin-ajax.php'),
	]);
	// highlight-end
}
```

## JavaScript

Voici la fonction `fetch` qui permet de faire une requête Ajax :

```js
async function jsonFetch(url, params = {}) {
	params = {
		credentials: "same-origin",
		...params,
	};

	const response = await fetch(url, params);
	if (response.status === 204) {
		return null;
	}
	const data = await response.json();
	return data;
}
```

Appel de cette fonction : Ici un exemple avec un champ `input` simple

```js title='assets/dist/js/front.min.js'
let params = new FormData();
params.append("action", "nom_action");
params.append("search", search);

// On appelle ici la variable que nous avons déclarer en PHP
const response = await jsonFetch(ma_variable.ajax_url, {
	method: "POST",
	body: params,
});

if (response.success) {
	console.log(response.data);
	element.innerHTML = response.data;
}
```

## PHP

En PHP, il faut déclarer une action qui sera appelée par le JS. Par exemple ici, une action `nom_action` et traiter la query.

```php title='functions.php'
add_action("wp_ajax_mon_action", "ma_fonction");
add_action("wp_ajax_nopriv_mon_action", "ma_fonction");


public function ma_fonction()
{
	ob_start();

	// Exemple
	$input = filter_input(INPUT_POST, 'input_name');

	// TO DO : Query

	$html = ob_get_clean();
	wp_send_json_success($html);
}

```
