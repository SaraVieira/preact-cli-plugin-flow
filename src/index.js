let flowStripTypes = require('babel-plugin-transform-flow-strip-types')
const preactCliFlow = config => {
    if (!config) {
        throw Error('You need to pass the webpack config to preactCliFlow')
    }

    const loaders = config.module.loaders
    const babelLoader = loaders.filter(
        loader => loader.loader === 'babel-loader'
    )[0]

    // Add flowStripTypes
    babelLoader.options.plugins.push(flowStripTypes)

    return config
}

module.exports = preactCliFlow
