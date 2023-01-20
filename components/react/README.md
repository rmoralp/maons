# React + Tailwind components

Maons React Components is a simple, modular and accessible component library that gives you the building blocks you need to build your React+Tailwind applications.

## Usage

### Install the package
Install `@maons/react-components` package:

```sh
$ npm install @maons/react-components

# or 

$ yarn add @maons/react-components
```

### Prepare Tailwind configuration

For a Tailwind configuration to work with the components, you should:

- Update your `tailwind.config.js` file to include the `@maons/react-components` package in the `content` array.
- Extend the `theme` object to include `primary` and `secondary` colors.

```js
// tailwind.config.js 
{
  content: [
    // ...
    './node_modules/@maons/react-components/**/*.{js,jsx}'
  ],
  // ...
  theme: {
    extend: {
      // Add primary and secondary colors
      colors: ({colors}) => ({
        primary: colors.blue,
        secondary: colors.violet
      })
    }
  },
  // ...
}
```

### Import the component

Now, you can start using a component like so!

```js
import {Button} from '@maons/react-components'


const Example = () => {
  return (
    <Button>Click me</Button>
  )
}
```
