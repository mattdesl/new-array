var array = require('./')
var test = require('tape')

test('create a new array filled with a value, or zero', function(t) {
  t.deepEqual(array(), [])
  t.deepEqual(array(2), [undefined, undefined])
  t.deepEqual(array(2, 0), [0, 0])
  t.deepEqual(array(2, 'foo'), ['foo', 'foo'])
  t.deepEqual(array(4, function(i) {
    return i
  }), [0, 1, 2, 3])
  t.end()
})
