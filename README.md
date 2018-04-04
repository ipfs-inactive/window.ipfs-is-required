# window.ipfs-is-required

[![NPM](https://img.shields.io/npm/v/window.ipfs-is-required.svg?style=flat-square)](https://www.npmjs.com/package/window.ipfs-is-required)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

> Prompt user to install IPFS Companion if `window.ipfs` is not available.

The [IPFS Companion](https://github.com/ipfs-shipyard/ipfs-companion) web extension provides a `window.ipfs` object to web pages you visit. This module will detects the presence of `window.ipfs` and if it isn't present, the user will be asked to install the web extension.

## Usage

You can just add a script tag to your HTML file:

```
<script src='https://unpkg.com/window.ipfs-is-required/index.js' />
```

Or:


```js
import ipfsIsRequired from 'window.ipfs-is-required'

ipfsIsRequired()
```

## License

[MIT](LICENSE) © Henrique Dias
