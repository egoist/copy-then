'use strict'
const fs = require('fs')
const path = require('path')

/**
 * Copy a file
 * @param {string|Stream} from - The file to copy
 * @param {string} to - The path to write file
 * @returns {Promise}
 */
module.exports = function (from, to) {
  return new Promise((resolve, reject) => {
    let readFile
    if (typeof from === 'string') {
      from = path.resolve(from)
      readFile = fs.createReadStream(from)
    } else if (from && typeof from.pipe === 'function') {
      readFile = from
    } else {
      throw new TypeError('Only filename and readable stream are supported!')
    }
    const writeFile = fs.createWriteStream(path.resolve(to))
    const onFinish = err => {
      readFile.removeListener('error', onFinish)
      writeFile.removeListener('finish', onFinish)
      writeFile.removeListener('error', onFinish)
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    }

    readFile.on('error', onFinish)
    writeFile.on('finish', onFinish)
    writeFile.on('error', onFinish)

    readFile.pipe(writeFile)
  })
}
