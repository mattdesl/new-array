# new-array

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Creates a new dense array with the given size, optionally filled with a value.

```js
var array = require('new-array')

array(2)
// > [ undefined, undefined ]

array(4, 0)
// > [ 0, 0, 0, 0 ]

array()
// > []

// using a function to generate values
array(4, (x, i) => i * 10)
// > [0, 10, 20, 30]
```

Primarily motivated by the fact that `new Array(n)` produces an array of holes that does not play well with methods like `Array#map()`.

## Usage

[![NPM](https://nodei.co/npm/new-array.png)](https://www.npmjs.com/package/new-array)

#### `arr = newArray(n[, value || fn])`

Returns a new dense array with length `n` (default 0), where each element is set to `value`, or `fn(i)` if its a function, or undefined if not specified.

## See Also

- [array-range](https://www.npmjs.com/package/array-range)

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/new-array/blob/master/LICENSE.md) for details.
