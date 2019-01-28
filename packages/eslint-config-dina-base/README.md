# eslint-config-dina-base

[![npm version](https://badge.fury.io/js/eslint-config-airbnb-base.svg)](http://badge.fury.io/js/eslint-config-airbnb-base)

This package provides Digital Natives' base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-dina-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

If you use yarn, run `npm info "eslint-config-dina-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency. See below for npm instructions.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-dina-base@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev eslint-config-dina-base
  ```

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=eslint-config-dina-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-dina-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev eslint-config-dina-base
  ```

  The cli will produce and run a command like:

  ```sh
  npm install --save-dev eslint-config-dina-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "dina-base"` to your .eslintrc.

### eslint-config-dina-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-dina-base@latest" peerDependencies
  ```

  Linux/OSX users can run
  ```sh
  (
    export PKG=eslint-config-dina-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-dina-base eslint@^3.0.1 eslint-plugin-import@^1.10.3
  ```

2. Add `"extends": "dina-base/legacy"` to your .eslintrc

See [Digital Natives' overarching ESLint config](https://npmjs.com/eslint-config-dina), [Digital Natives' Javascript styleguide](https://github.com/digitalnatives/javascript), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

### eslint-config-dina-base/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/digitalnatives/javascript/blob/master/packages/eslint-config-dina-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
