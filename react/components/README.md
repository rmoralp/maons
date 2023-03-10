<a name="readme-top"></a>

# React + Tailwind components

Maons React Components is a simple, modular and accessible component library that gives you the building blocks you need to build your React+Tailwind applications.

You can have a look to storybook playground [here 📝](https://main--63cea501d66c7f57c939718b.chromatic.com/).

## Install

To use Maons React Components, all you need to do is install the `@maons/react-components` package:

```sh
$ npm install @maons/react-components

# or 

$ yarn add @maons/react-components
```

## Usage

### Prepare Tailwind configuration

For a Tailwind configuration to work with the components, you should:

- Update your `tailwind.config.js` file to include the `@maons/react-components` package in the `content` array. This will allow Tailwind to extract the classes from the components.
- Extend the `theme` object to include `primary` and `secondary` colors. These colors will be used by the components.

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


const Example = () => (
  <Button>Click me</Button>
)
```

## License

Licensed under the [MIT license](https://github.com/rmoralp/maons/blob/main/react/components/LICENSE.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
