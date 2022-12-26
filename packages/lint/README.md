# `@maons/lint`

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
