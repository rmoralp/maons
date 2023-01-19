

## Prepare Tailwind

Extend tailwind theme and add primary and secondary colors:

```js
// tailwind.config.js 
{
  // ...
  colors: ({colors}) => ({
    primary: colors.blue,
    secondary: colors.green
  })
  // ...
}
```