# TeamRust

CS-400 Software Engineering Project for Team Rust

## Build Instructions

### Locally

If you have a recent release of Node.js installed, you can simply build and run the server like any other Node application:

```sh
$ cd application
$ npm install
$ node app.js
```

To run unit tests:

```sh
$ npm test
```

### With Docker

To build a container named collections and run an interactive session under port 8080:

```sh
$ cd application
$ docker build -t collections .
$ docker run -it -p 8080:8080 collections
```

To run unit tests in an interactive session:

```sh
$ docker run -it collections npm test
```

## What is Collections?

Collections is a visual organizer app that aims to be convenient and easy to use.

Our target userbase is hobbyist collectors who would like a way to organize and look through their collections in a way that allows them to get all of the information they need without having to search through their physical collections.

There are many tools that collectors use to catalog their collections, but none of them are built specifically for collectors.

Other names considered were cshelf and CVO.

## Product Vision Statement

For the hobbyist who needs a tool to organize physical collections like coins, stamps, games, etc., Collections is a visual organizer that provides a simple, visual way to store and retrieve information about a physical collection. Unlike spreadsheets, which are text-based and complicated, our product allows the hobbyist to easily add or view descriptions and images of items in the collection in one interface.
