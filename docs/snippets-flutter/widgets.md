---
sidebar_position: 2
---

# Widgets

`Flutter` utilise des widgets. Ces widgets sont configurables, ils peuvent être natifs (créé par Flutter) mais nous pouvons aussi créer nos propres widgets.

Notes sur les widgets que j'utilise le plus souvent :

## Text()

Le widget Text permet d'afficher une chaîne de caractères

```js
Text(
    'Mon texte ici',
    style: TextStyle(
        fontWeight: FontWeight.bold,
        fontSize: 40,
        //etc...
    )
)
```

### Paramètres

- Les paramètres possibles de **Text()** _(non exhaustive)_ : `style`, `textAlign`, `textDirection`...
- Les paramètres possibles du paramètre **style** _(non exhaustive)_ : `color`, `backgroundColor`, `fontSize`, `fontWeight`, `fontStyle`, `letterSpacing`, `textBaseline`, `decoration`..

## Image()

Le widget Image permet d'afficher une image avec Flutter. On peut afficher une image de plusieurs manières :

- Avec la source `network`
- Avec la source `asset`

### Source network

```js
Image.network(
    'mon-url',
    height: 100.0
)
```

### Source asset

Les assets sont gérés dans le fichier `pubspec.yaml`. Pour inclure des assets, il faut donc créer un dossier assets à la racine. Dans ce dossier, on peut créer un dossier images dans lequel il y aura toutes les images. Il faudra ensuite inclure les images dans `pubspec.yaml` :

```js title='pubspec.yaml'
//Décommenter les lignes suivantes dans le fichier pubspec.yaml
flutter:
  assets:
    // Pour cibler toutes les images du dossier assets/images
    - assets/images/
```

```js
Image.asset("assets/images/mon-image.jpg");
```
