## isArray

```js
Array._isArray = function(arg) {
  return !!arg && arg.__proto__ === Array.prototype
}
```

```js
Array._isArray = function(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}
```

```js
Array._isArray = function(arg) {
  return arg instanceof Array
}
```

```js
Array._isArray = function(arg) {
  return !!arg && arg.constructor === Array
}
```
