# Boots

Bootstrap Sass custom build - see [example page](eliot-akira.github.io/boots)

## Purpose

A common way people use Bootstrap is by including the whole library, then adding more CSS on top to customize it. It is more efficient to include only the modules used, adjust style variables, and compile a site-specific custom build.

## Use

Include CSS

```html
<link rel="stylesheet" href="assets/css/boots.min.css">
```

Include JS - requires [jQuery](http://jquery.com/)

```html
<script type="text/javascript" src="assets/js/boots.min.js"></script>
```

## Build

#### Requires [Node.js](https://nodejs.org/) and its included package manager, *npm*

The following commands are run from the root of the project folder.

*Install dependencies*

```sh
npm install
```

This will install the Gulp task manager and supporting modules.

*Build and minify assets*

```sh
npm run build
```

*Build with source maps*

```sh
npm run dev
```

*Watch for file changes and automatically build with source maps*

```sh
npm run watch
```

*Lint JS files*

```sh
npm run lint
```

*Remove compiled assets*

```sh
npm run clean
```
