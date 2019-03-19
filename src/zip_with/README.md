# ZIP WITH Function
This zipWith takes a function and two lists and zips the lists together, applying the function to every pair of values.
The function value is one new list.

If the lists are of unequal length, the output shall be as long as the shorter one.
Superfluous values of the longer list are to be ignored (completely).

Inputs shall not be modified.

For example,

```javascript
zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]); // [1e0, 1e1, 1e2, 1e3]
zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])  // [4, 7, 7, 4, 7, 7]
```
