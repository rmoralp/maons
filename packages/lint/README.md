<a name="readme-top"></a>

# Lint rules and static code analysis

ESLint and Prettier configuration ready to use in any project.

It includes support for `React.js`, `Tailwindcss` and `Prettier`.

## Getting Started

### Install

```bash
npm install @maons/lint --save-dev
```

## Configuration

### ESLint

Add the following to your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@maons/lint/.eslintrc.js"
  }
}
```

or create a `.eslintrc.js` file with the following content:

```js
module.exports = {
  root: true,
  extends: '@maons/lint/.eslintrc.js',
};
```

### Prettier

Add the following to your `package.json`:

```json
{
  "prettier": "@maons/lint/.prettierrc.js"
}
```

### Visual Studio Code Integration

Steps to integrate `@maons/lint` with Visual Studio Code:

1. Install ESLint and Prettier plugins:

- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Add the following to your VSCode `settings.json`:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true,
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## License

Licensed under the [MIT license](https://github.com/rmoralp/maons/blob/main/packages/lint/LICENSE.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
