'use strict'
const copy = require('./')

copy('./package.json', './__p.json')
  .then(() => {
    console.log('done')
  })
  .catch(err => console.log(err.stack))
