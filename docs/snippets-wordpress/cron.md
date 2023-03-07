---
sidebar_position: 4
---

# Cron WordPress

Voici quelques bouts de code et fonctions de base/utiles que j'utilise le plus souvent pour mon thème ou plugin. Elles sont à mettre dans le fichier `functions.php` ou dans une classe selon l'architecture du thème ou du plugin.

## Redirection après une deconnexion

```php title="functions.php"
/**
 * Home redirection after logout admin
 *
 * @return void
 */
function home_redirect_after_logout()
{
    //redirect to the desired page
    wp_safe_redirect(home_url('/'));
    exit();
}
add_action('wp_logout', 'home_redirect_after_logout');
```

## Modifier l'excerpt

```php title="functions.php"
/**
 * Change the excerpt length in articles
 *
 * @param int $length
 */
function my_excerpt_length($length)
{
    return 20;
}
add_filter('excerpt_length', [$this, 'my_excerpt_length']);


/**
 * Change the excerpt more in articles
 *
 * @param $more
 * @return string
 */
function my_excerpt_more($more)
{
    return '...';
}
add_filter('excerpt_more', [$this, 'my_excerpt_more']);
```
