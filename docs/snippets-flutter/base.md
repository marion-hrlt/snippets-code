---
sidebar_position: 1
---

# Base

Le code minimal permettant de lancer une application Flutter utilisant Material :

```js title='lib/main.dart'

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
            appBar: AppBar(
                leading: const Icon(Icons.home),
                title: const Text('Mon application'),
                actions: const <Widget>[Icon(Icons.more_vert)],
            ),
            body: const Text('Home'),
        )
    );
  }
}

```

:::note

`debugShowCheckedModeBanner` permet d'enlever la barre "DEBUG" située en haut à droite de l'application en mode debug (local).

:::
