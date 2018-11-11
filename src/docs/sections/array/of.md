## of

```js
Array._of = function() {
  return [...arguments]
}
```

```js
Array._of = function() {
  return Array.prototype.slice.call(arguments)
}
```
