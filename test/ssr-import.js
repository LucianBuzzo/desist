const assert = require('assert')

assert.doesNotThrow(() => {
  require('../desist')
})

console.log('SSR import smoke test passed')
