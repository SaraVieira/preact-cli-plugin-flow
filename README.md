# preact-cli-plugin-flow

Use flow with the Preact CLI

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/TcwA1EShekGpPzRyQvGn9ysQ/SaraVieira/preact-cli-plugin-flow'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/TcwA1EShekGpPzRyQvGn9ysQ/SaraVieira/preact-cli-plugin-flow.svg' />
</a>

## Getting Started

Install it via npm:

```shell
npm install preact-cli-plugin-flow --save-dev
```

This will install:

  - [flow-bin](https://github.com/flowtype/flow-bin)
  - [flow-typed](https://github.com/flowtype/flow-typed)
  - [babel-plugin-transform-flow-strip-types](https://www.npmjs.com/package/babel-plugin-transform-flow-strip-types)

After install this plugin will run 3 commands:

  - flow init to create your .flowconfig
  - install flow-bin so you can run the flow binary in your folder
  - run flow-typed update to get all the definitions from libs installed

After this just include it in your project by creating a `preact.config.js`

```javascript
const preactCliFlow = require('preact-cli-plugin-flow');

export default function (config) {
	preactCliFlow(config);
}
```

Now you can use flow all you want 🎉

## License

MIT
