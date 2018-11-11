## findIndex

```js
Array.prototype._findIndex = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const objThis = Object(this)
  const len = objThis.length >>> 0

  let k = 0
  while (k < len) {
    if (callbackfn.call(thisArg, objThis[k], k, objThis)) return k
    k++
  }

  return -1
}
```
