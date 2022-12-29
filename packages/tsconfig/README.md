# `@maons/tsconfig`

> These are base shared `tsconfig.json`s from which all other `tsconfig.json`'s inherit from.

## Getting Started

### Install

```bash
npm install @maons/tsconfig --save-dev
```

## Configuration

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
