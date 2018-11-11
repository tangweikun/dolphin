## forEach

```js
Array.prototype._forEach = function(callbackfn, thisArg) {
  'use strict'

  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  if (typeof callbackfn !== 'function') {
    throw new TypeError('callbackfn is not a function')
  }

  const objThis = Object(this)
  const len = objThis.length >>> 0
  let i = 0

  while (i < len) {
    if (i in objThis) {
      callbackfn.call(thisArg, objThis[i], i++, objThis)
    }
  }
}
```
