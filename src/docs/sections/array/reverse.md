## reverse

```js
Array.prototype._reverse = function() {
  'use strict'
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }
  const objThis = Object(this)
  const len = objThis.length >>> 0
  let k = 0
  while (k < Math.floor(len / 2)) {
    const temp = objThis[k]
    objThis[k] = objThis[len - 1 - k]
    objThis[len - 1 - k] = temp
    k++
  }
  return objThis
}
```

```js
Array.prototype._reverse = function() {
  'use strict'
  if (this == null) {
    throw new TypeError('this is null or not defined')
  }

  for (let i = 0, j = this.length - 1; i < j; )
    this[i] = this[j] + ((this[j--] = this[i++]), 0)

  return this
}
```
