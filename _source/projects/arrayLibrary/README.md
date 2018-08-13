### The Project

We will be implementing a library with actions  we might want to take on an array.
These functions all exist in the standard JS array library but we are going to
write them with pure JS in order  to understand how they might work.   Here are
the functions we want to implement:

- contains(array, item) -> true if they array contains the item, false otherwise.
- countOfItem(array, item) -> number of times the item in array, -1 if not in array.
- addArrays(array1, array2) -> combine two arrays into one.
- join(array, glue) -> join the pieces of an array around a glue string
- reverse(array) -> return the reversed array
- pop(array) -> return an array with the last element popped off
- push(array, element) -> return an array with a new element pushed onto the front.
- getCountOfEachElement(arr) -> return an object where the keys are the unique elements
                                in the array and the values are the count of the element.

Here is how it should work:

```javascript
var arrayLibrary = new ArrayLibrary();

// should return true because 1 is in the array
var inArray = arrayLibrary.contains([1, 2, 3], 1);
// should return false because 'matt' is not in the list of names
var inArray = arrayLibrary.contains(['tony', 'jake'], 'matt');

// should return 2 because 'jake' exists in the array 2 times.
var count = arrayLibrary.countOfItem(['jake', 'tony', 'jake'], 'jake');
// should return 0 because 5 is not in the array at all.
var count = arrayLibrary.countOfItem([2, 3, 4, 2], 5);

// should return [1,2,3] because that is the result of adding the two input arrays.
var arrays = arrayLibrary.addArrays([1], [2, 3]);

// should return '1,2,3' after we join the array elements on the string ','
var joinedArray = arrayLibrary.join([1,2,3], ',');

// should  return [3, 2, 1] as that is the reverse of the input array.
var reversedArray = arrayLibrary.reverse([1, 2, 3]);

// should retun [1, 2] because we  have popped the last element off of the array.
var poppedArray = arrayLibrary.pop([1, 2, 3]);

// should return [1, 2, 3] after we have pushed the 3 onto the end of the array.
var pushedArray = arrayLibrary.push([1, 2], 3);

// should return {'a': 2, 'b': 1}
var counts = arrayLibrary.getCountOfEachElement(['a', 'b', 'a']);
```