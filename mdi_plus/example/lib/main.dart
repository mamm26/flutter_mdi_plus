import 'package:flutter/material.dart';
import 'package:mdi_plus/mdi_plus.dart';

void main() => runApp(const MyApp());

/// Example app for the mdi_plus package.
class MyApp extends StatelessWidget {
  /// Creates the example application.
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyApp',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Icon(Mdi.bell),
              Text('Ring'),
            ],
          ),
        ),
      ),
    );
  }
}
