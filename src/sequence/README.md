# SEQUENCE generator
The sequence function is a generator that returns new `n`-size array, filled according to `pattern`.

`pattern` may be:

- A `function` that takes two `(element, index)`, one: `(element)` or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
- number, string or any other object, then filled by copying, this object `n`-times.

Examples:

```javascript
sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2); // [0, 1, 0, 1, 0]
sequence(10, (x, idx) => idx+1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num); // an interesting chain with reduce, to produce sum of numbers from 1 to 10
```
