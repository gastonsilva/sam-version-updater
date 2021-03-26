# SAM-Version-Updater

This is a simple module for [standard-version](https://github.com/conventional-changelog/standard-version) to update Globals.Function.Tags.version in a [SAM](https://aws.amazon.com/serverless/sam/)'s template.yaml file

## Usage

For non-node proyects install globally and export the global path:

```bash
npm i -g sam-version-updater
export NODE_PATH=$(npm root -g)
```

Your version configuration for standard-version should be like:

```js
// .versionrc.js
const tracker = {
  filename: 'template.yaml',
  updater: require('sam-version-updater')
}

module.exports = {
  bumpFiles: [tracker]
}
```
