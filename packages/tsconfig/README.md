<a name="readme-top"></a>

# Typescript configurations

`tsconfig.json` files for `Node.js`, `Next.js` and `React.js` projects.

## Getting Started

### Install

```bash
npm install @maons/tsconfig --save-dev
```

## Configuration

These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

### Node.js

Create a `tsconfig.json` file with the following content:

```json
{
  "extends": "@maons/tsconfig/base.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

### Next.js

Create a `tsconfig.json` file with the following content:

```json
{
  "extends": "@maons/tsconfig/nextjs.json",
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

### React.js

Create a `tsconfig.json` file with the following content:

```json
{
  "extends": "@maons/tsconfig/react-library.json",
  "include": ["."],
  "exclude": ["dist", "build", "node_modules"]
}
```

## License

Licensed under the [MIT license](https://github.com/rmoralp/maons/blob/main/packages/tsconfig/LICENSE.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
