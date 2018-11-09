## deepFreeze

```js
function deepFreeze(obj) {
  const propNames = Object.getOwnPropertyNames(obj)

  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = obj[name]
    obj[name] = value && typeof value === 'object' ? deepFreeze(value) : value
  }

  return Object.freeze(obj)
}
```
