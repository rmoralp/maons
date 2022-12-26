module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['./node_modules/@maons/lint'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
