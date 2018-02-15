const findUp = require('find-up')

module.exports = (
  config,
  extractPlugin,
  { cssLoaderOptions = {}, postcssLoaderOptions = null, dev, isServer, loaders = [] }
) => {
  
  if (postcssLoaderOptions instanceof Function) {
    cssLoaderOptions = postcssLoaderOptions({dev, isServer})
  }
  
  let postcssLoader
  if (postcssLoaderOptions !== null) {
    const postcssConfigPath = findUp.sync('postcss.config.js', {
      cwd: config.context
    })
  
    if (postcssLoaderOptions instanceof Function) {
      postcssLoaderOptions = postcssLoaderOptions({dev, isServer, path: postcssConfigPath}) || {}
    }
    if (!postcssLoaderOptions.config || !postcssLoaderOptions.config.path) {
      postcssLoaderOptions.config = Object.assign(postcssLoaderOptions.config, { path: postcssConfigPath })
    }
    postcssLoader = {
      loader: 'postcss-loader',
      options: postcssLoaderOptions
    }
  }

  const cssLoader = {
    loader: isServer ? 'css-loader/locals' : 'css-loader',
    options: {
      minimize: !dev,
      sourceMap: dev,
      importLoaders: loaders.length + (postcssLoader ? 1 : 0),
      ...cssLoaderOptions
    }
  }

  // When not using css modules we don't transpile on the server
  if (isServer && !cssLoader.options.modules) {
    return ['ignore-loader']
  }

  // When on the server and using css modules we transpile the css
  if (isServer && cssLoader.options.modules) {
    return [cssLoader, postcssLoader, ...loaders].filter(Boolean)
  }

  return [
    dev && 'extracted-loader',
    ...extractPlugin.extract({
      use: [cssLoader, postcssLoader, ...loaders].filter(Boolean)
    })
  ].filter(Boolean)
}
