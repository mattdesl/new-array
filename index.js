module.exports = newArray

function newArray (n, value) {
  n = n || 0
  var isFn = typeof value === 'function'
  var array = new Array(n)
  for (var i = 0; i < n; i++) {
    array[i] = isFn ? value(i) : value
  }
  return array
}
