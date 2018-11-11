## call

```js
Function.prototype._call = function(context) {
  var context = context || window
  // Add an property to the `context`
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  // take out the rest parameters of `context`
  var args = [...arguments].slice(1)

  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)

  // delete fn
  delete context.fn
  return result
}
```
