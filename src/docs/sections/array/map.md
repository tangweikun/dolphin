## map

```js
Array.prototype._map = function(callbackfn, thisArg) {
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
  const res = new Array(len)

  while (k < len) {
    if (k in objThis) {
      res[k] = callbackfn.call(thisArg, objThis[k], k, objThis)
    }
    k++
  }

  return res
}
```

```js
Array.prototype._map = function(callbackfn, thisArg) {
  return this.reduce(
    (acc, currentValue, idx, array) => (
      (acc[idx] = callbackfn.call(thisArg, currentValue, idx, array)), acc
    ),
    [],
  )
}
```
