# vue-plugin-template

Use this template to create a Vue plugin. Several sample files were created as a guide. Some should be edited.

Files to Edit:

| **File**                       | **Task**                                   |
| ------------------------------ | ------------------------------------------ |
| [index.d.ts](types\index.d.ts) | Set global instance methods and properties |
| [index.ts](src\index.ts)       | Configure plugin installation              |
| [package.json](package.json)   | Change Plugin Name                         |
|                                | Set Version                                |
|                                | main, module, unpkg                        |
|                                |

## Storybook

Storybook is included in order to develop components. Sample stories and a basic configuration has been provided.

## Rollup

Rollup doesn't work too well in this case.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run dist
```

### Run your unit tests

```
npm run test:unit
```

### Postinstall Script

Installs peer dependencies and for removes @types/react which seems to get installed with storybook. Causes builderrors.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
