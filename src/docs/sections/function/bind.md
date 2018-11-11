## bind

```js
Function.prototype._bind = function(oThis) {
  if (typeof this !== 'function') {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      'Function.prototype.bind - what is trying to be bound is not callable',
    )
  }

  var aArgs = Array.prototype.slice.call(arguments, 1),
    fToBind = this,
    fNOP = function() {},
    fBound = function() {
      return fToBind.apply(
        this instanceof fNOP ? this : oThis,
        aArgs.concat(Array.prototype.slice.call(arguments)),
      )
    }

  if (this.prototype) {
    // Function.prototype doesn't have a prototype property
    fNOP.prototype = this.prototype
  }
  fBound.prototype = new fNOP()

  return fBound
}
```

```js
Function.prototype._bind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)

  return function F() {
    // we can use `new F()` because it returns a function, so we need to determine
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```
