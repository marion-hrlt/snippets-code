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

## Container()

Le widget Container permet de créer un conteneur. Ce conteneur peut être personnalisé avec des paramètres.

```js
Container(
    // Couleur de fond
    color: Colors.blue,
    // Largeur
    width: 100,
    // Hauteur
    height: 100,
    // Marge interne
    padding: EdgeInsets.all(10),
    // Marge externe
    margin: EdgeInsets.all(10),
    // Décoration
    decoration: BoxDecoration(
        // Couleur de fond
        color: Colors.blue,
        // Bordure
        border: Border.all(
            color: Colors.black,
            width: 2,
        ),
        // Bordure arrondie
        borderRadius: BorderRadius.circular(10),
        // Ombre
        boxShadow: [
            BoxShadow(
                color: Colors.black,
                blurRadius: 10,
                offset: Offset(5, 5),
            )
        ]
    ),
    // Enfant
    child: Text('Mon texte ici'),
)
```

## Padding()

Le widget Padding permet de créer une marge interne. Le widget Center permet de centrer un widget.

```js
Padding(
    // Marge interne
    padding: EdgeInsets.all(10),
    // Enfant
    child: Center(
        // Enfant
        child: Text('Mon texte ici'),
    ),
)
```

## Center()

Le widget Center permet de centrer un widget.

```js
Center(
    // Enfant
    child: Text('Mon texte ici'),
)
```

## Expanded()

Le widget Expanded permet de créer un widget qui prend tout l'espace disponible.

```js
Expanded(
    // Enfant
    child: Text('Mon texte ici'),
)
```

## Column()

Le widget Column permet de créer une colonne. Ce widget est très utile pour créer des interfaces.

```js
Column(
    // Alignement horizontal
    crossAxisAlignment: CrossAxisAlignment.center,
    // Alignement vertical
    mainAxisAlignment: MainAxisAlignment.center,
    // Enfants
    children: [
        Text('Mon texte ici'),
        Text('Mon texte ici'),
        Text('Mon texte ici'),
    ],
)
```

## Row()

Le widget Row permet de créer une ligne. Ce widget est très utile pour créer des interfaces.

```js

Row(
    // Alignement horizontal
    crossAxisAlignment: CrossAxisAlignment.center,
    // Alignement vertical
    mainAxisAlignment: MainAxisAlignment.center,
    // Enfants
    children: [
        Text('Mon texte ici'),
        Text('Mon texte ici'),
        Text('Mon texte ici'),
    ],
)
```

## Stack()

Le widget Stack permet de créer une pile. Ce widget est très utile pour créer des interfaces. Les widgets sont empilés les uns sur les autres. Le premier widget est en bas de la pile, le dernier est en haut.

```js
Stack(
    // Alignement horizontal
    alignment: Alignment.center,
    // Enfants
    children: [
        Text('Mon texte ici'),
        Text('Mon texte ici'),
        Text('Mon texte ici'),
    ],
)
```

## Material()

Le widget Material permet de créer un widget Material. Ce widget est très utile pour créer des interfaces. Il permet de créer des boutons, des cartes, des onglets, etc.

Exemple d'une application `Material` minimale :

```js
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'Mon application',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ), // ThemeData
      home: Scaffold()... // On peut mettre le widget qu'on veut ici
    ), // MaterialApp
  ); // runApp
} // main
```

## Scaffold()

Le widget Scaffold permet de créer un widget Scaffold. Ce widget est très utile pour créer des interfaces. Il permet de créer une interface complète avec un appbar, un drawer, un bottomNavigationBar, etc.

```js
Scaffold(
    // Appbar
    appBar: AppBar(
        title: Text('Mon titre'),
    ),
    // Contenu
    body: Container(),
    // Drawer
    drawer: Drawer(),
    // BottomNavigationBar
    bottomNavigationBar: BottomNavigationBar(),
)
```

### Drawer

Le widget Drawer permet de créer un widget Drawer. Ce widget est très utile pour créer des interfaces. Il permet de créer un menu latéral.

```js
Scaffold(
    // Appbar
    appBar: AppBar(
        title: Text('Mon titre'),
    ),
    // Contenu
    body: Container(),
    // Drawer
    drawer: Drawer(
        // Enfants
        child: Column(
            children: [
                Text('Mon texte ici'),
                Text('Mon texte ici'),
                Text('Mon texte ici'),
            ],
        ),
    ),
)
```

### Floating Action Button

Le widget FloatingActionButton permet de créer un bouton flottant. Ce widget est très utile pour créer des interfaces.

```js
Scaffold(
    // Appbar
    appBar: AppBar(
        title: Text('Mon titre'),
    ),
    // Contenu
    body: Container(),
    // Bouton flottant
    floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Icon(Icons.add),
    ),
)
```

### BottomNavigationBar

Le widget BottomNavigationBar permet de créer un widget BottomNavigationBar. Ce widget est très utile pour créer des interfaces. Il permet de créer un menu en bas de l'application.

```js
Scaffold(
    // Appbar
    appBar: AppBar(
        title: Text('Mon titre'),
    ),
    // Contenu
    body: Container(),
    // BottomNavigationBar
    bottomNavigationBar: BottomNavigationBar(
        // Items
        items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home),
                label: 'Accueil',
            ),
            BottomNavigationBarItem(
                icon: Icon(Icons.settings),
                label: 'Paramètres',
            ),
        ],
    ),
)
```

## Card()

Le widget Card permet de créer une carte. Ce widget est très utile pour créer des interfaces.

```js
Card(
    // Élévation
    elevation: 10,
    // Enfant
    child: Text('Mon texte ici'),
)
```

## Ink() et InkWell()

Le widget Ink permet de créer un widget Ink. Ce widget est très utile pour créer des interfaces. Il permet de créer un widget qui réagit au toucher. Le widget InkWell permet de créer un widget InkWell. Ce widget est très utile pour créer des interfaces. Il permet de créer un widget qui réagit au toucher.

```js
Ink(
    // Enfant
    child: InkWell(
        // Enfant
        child: Text('Mon texte ici'),
        // Fonction
        onTap: () {},
    ),
)
```

### Exemple Ink avec Image

```js
Card(
    child: Container(
        height: 150,
        child: Stack(
            fit: StackFit.expand,
            children: <Widget>[
                Ink.image(
                    fit: BoxFit.cover,
                    image: AssetImage('chemin/de/image.jpg'),
                    child: InkWell(
                        onTap: () {
                            print('tap');
                        },
                    ), // InkWell
                ), // Ink.image
            ], // <Widget>[]
        ), // Stack
    ), // Container
); // Card
```
