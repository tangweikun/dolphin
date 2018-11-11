## find

```js
Array.prototype._find = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  for (let i in this) {
    if (callbackfn.call(thisArg, this[i], i, this)) return this[i]
  }

  return undefined
}
```
