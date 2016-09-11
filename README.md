# copy-then

[![NPM version](https://img.shields.io/npm/v/copy-then.svg?style=flat-square)](https://npmjs.com/package/copy-then) [![NPM downloads](https://img.shields.io/npm/dm/copy-then.svg?style=flat-square)](https://npmjs.com/package/copy-then) [![Build Status](https://img.shields.io/circleci/project/egoist/copy-then/master.svg?style=flat-square)](https://circleci.com/gh/egoist/copy-then)

> Simple utility for copying files with Promise support.

## Install

```bash
$ npm install --save copy-then
```

## Usage

```js
const copy = require('copy-then')

copy('./from.js', './to.js')
  .then(() => {
    console.log('done')
  })
```

**Notice:** You're recommended to manually check if the dest dir exists before calling `copy-then`, for example:

```js
const mkdirp = require('mkdirp-then')

mkdirp('./nested/dest/dir')
  .then(copyFiles)

function copyFiles() {
  const files = [
    ['./from/a.js', '.nested/dest/dir/a.js'],
    ['./from/b.js', '.nested/dest/dir/b.js'],
    ['./from/c.js', '.nested/dest/dir/c.js']
  ]
  return Promise.all(files.map(file => copy(file[0]. file[1])))
}
```

## API

### copyThen(from, to)

#### from

Type: `string`<br>
Required: `true`

The source file.

#### to

Type: `string`<br>
Required: `true`

The dest file.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
