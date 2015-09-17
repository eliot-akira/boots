# Boots

Bootstrap Sass custom build - see [example page](http://eliot-akira.github.io/boots)

## Purpose

- Include only the modules used

- Add new components as necessary, and adjust style via variables

- Compile a site-specific custom build

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

##### Requires [Node.js](https://nodejs.org/) and its included package manager, *npm*

The following commands are run from the root of the project folder.

**Install dependencies**

```sh
npm install
```

This installs the Gulp task manager and supporting modules.

**Build and minify assets**

```sh
npm run build
```

**Build with source maps**

```sh
npm run dev
```

**Watch for file changes and automatically build with source maps**

```sh
npm run watch
```

**Lint JS files**

```sh
npm run lint
```

**Remove compiled assets**

```sh
npm run clean
```

## Source maps

Source maps allow mapping the compiled CSS to its source Sass files when using a browser's inspector. This makes development easier by showing which file corresponds to an element's style.

To see how it works, run a build with source maps and open *index.html* in a browser. Each element's style should show its source file and line number.
