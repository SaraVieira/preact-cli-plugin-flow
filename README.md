# preact-cli-plugin-flow

Use flow with the Preact CLI

## Getting Started

Install it via npm:

```shell
npm install preact-cli-plugin-flow --save-dev
```

yarn:

```shell
yarn add preact-cli-plugin-flow --dev
```

This will install:

  - [flow-bin](https://github.com/flowtype/flow-bin)
  - [flow-typed](https://github.com/flowtype/flow-typed)
  - [babel-plugin-transform-flow-strip-types](https://www.npmjs.com/package/babel-plugin-transform-flow-strip-types)

And include in your project by creating a `preact.config.js`

```javascript
const preactCliFlow = require('preact-cli-plugin-flow');

export default function (config) {
	preactCliFlow(config);
}
```

## License

MIT
