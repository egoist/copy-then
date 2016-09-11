import test from 'ava'
import copy from './'

test('copy', async t => {
  await copy('./package.json', './__ppp.json')
  t.is(require('./__ppp.json').name, 'copy-then')
})
