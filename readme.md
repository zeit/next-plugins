# Next.js Plugins

## Official Next.js plugins

- [@zeit/next-mdx](./packages/next-mdx)
- [@zeit/next-css](./packages/next-css)
- [@zeit/next-sass](./packages/next-sass)
- [@zeit/next-less](./packages/next-less)
- [@zeit/next-stylus](./packages/next-stylus)
- [@zeit/next-preact](./packages/next-preact)
- [@zeit/next-typescript](./packages/next-typescript)
- [@next/mdx](https://github.com/zeit/next.js/tree/canary/packages/next-bundle-analyzer)
- [@zeit/next-source-maps](./packages/next-source-maps)
- [@zeit/next-workers](./packages/next-workers)

## Community made plugins

- [next-awesome-typescript](https://github.com/saitonakamura/next-awesome-typescript)
- [next-compose-plugins](https://github.com/cyrilwanner/next-compose-plugins)
- [next-env](https://github.com/formatlos/next-env)
- [next-images](https://github.com/arefaslani/next-images)
- [next-inferno](https://github.com/queses/next-inferno)
- [next-offline](https://github.com/hanford/next-offline)
- [next-optimized-images](https://github.com/cyrilwanner/next-optimized-images)
- [next-pino](https://github.com/khaeransori/next-pino)
- [next-plugin-graphql](https://github.com/lfades/next-plugin-graphql)
- [next-testcafe-build](https://github.com/formatlos/next-testcafe-build)
- [next-runtime-dotenv](https://github.com/tusbar/next-runtime-dotenv)
- [next-progressbar](https://github.com/lucleray/next-progressbar)
- [next-purgecss](https://github.com/lucleray/next-purgecss)
- [next-plugin-transpile-modules](https://github.com/KeitIG/next-plugin-transpile-modules)
- [next-seo](https://github.com/garmeeh/next-seo)
- [next-mdx-blog](https://github.com/hipstersmoothie/next-mdx-blog)
- [next-fonts](https://github.com/rohanray/next-fonts)
- [next-size](https://github.com/lucleray/next-size)

## Adding a plugin

> :warning: Before adding a plugin in this repository please create an issue to establish if it should be an official plugin or not.

1. Create a directory under the `packages` folder
2. Add `package.json` to the directory with these contents:
```
{
  "name": "@zeit/next-<NAME>",
  "version": "0.0.1",
  "main": "index.js",
  "license": "MIT",
  "repository": "zeit/next-plugins"
}
```

3. Add a `index.js` file with the plugin code
4. Add a `readme.md` explaining what the plugin does, how to install, and how to configure it
5. Submit a pull request

## Publishing

Note: this is for maintainers only and won't work if you're not a maintainer.

Replace `NPM_CONFIG_OTP` with the OTP generated by the authenticator.

### Publishing Canary

```
NPM_CONFIG_OTP=123456 yarn release-canary
```

### Publishing Stable

```
NPM_CONFIG_OTP=123456 yarn release-stable
```
