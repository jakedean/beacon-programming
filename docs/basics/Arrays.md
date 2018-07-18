Arrays are a way to group items of the same type together.  Imagine we have a list of urls
that we want to display for our user on our website.  We need a way to group them all into a
bucket so we can show them one by one.  You might do that like this:

```javascript
// Our links are now grouped into a single bucket so we can move them around in our program
// as one unit.
var urlArray = ['google.com', 'wayfair.com', 'hubspot.com'];

// Now we can go through each one and display it to the console.
for (var index = 0; index < urlArray.length; index++) {
  console.log(urlArray[index]);
}
```

The way things are stored and retreived in arrays is through indexes.  What this means
is I need a way to access a url from our `urlArray`.  What if I want to just find out
what the first url is in `urlArray`?  For this we will look up the value at the first index
of the array.  Here is an example of the indexes and values of our array:
```javascript
// index value:     0              1              2
var urlArray = ['google.com', 'wayfair.com', 'hubspot.com'];
```

You will notice the first index value is 0 and from there we just increment the index by one
for each element in our array.

```javascript
// Indexes go from 0 to 2 here
var carsArray = ['Chevrolet', 'Honda', 'Toyota']
console.log(carsArray[0]);  // Prints 'Chevrolet'
console.log(carsArray[1]);  // Prints 'Honda'
console.log(carsArray[2]);  // Prints 'Toyota'

// Indexes go from 0 to 1 here
var hockeyPlayers = ['Patrick Kane', 'Riley Nash'];
console.log(hockeyPlayers[0]); // Prints 'Patrick Kane'
console.log(hockeyPlayers[1]); // Prints 'Riley Nash'

// If you try to access indexes that don't exist, 'undefined' will be printed because
// there is not a value defined at that index, here are two examples.
console.log(hockeyPlayers[2]); // Prints 'undefined'
console.log(carsArray[1000]);  // Prints 'undefined'
```

The values within an array don't have to be strings as we have shown thus far, they could be integers
or dictionaries for example:
```javascript
var arrayOfIntegers = [1000, 2000, 3000];
console.log(arrayOfIntegers[0]); // Prints 1000

var arrayOfDictionaries = [{'name': 'Jake'}, {'name': 'Tony'}];
console.log(arrayOfDictionaries[1]); // Prints {'name': 'Tony'}
```

As was seen in the first example we often times want to generate an array so we can display information
on a web page.  The way looping through a list works is as follows:
```javascript
var arrayOfInts = [1000, 2000, 3000];
var sumOfInts = 0;

// Now we will loop through the values of arrayOfInts one at a time from left to
// right.
// For each value we will increase sumOfInts.
// Start with our index at 0 and go all of the way until the index is 2, this will
// cover all of the indexes in our array and thus access all of our values.
for(var index = 0; index < arrayOfInts.length; index++) {
  // The first iteration of this loop index will be 0, then 1 then 2.
  sumOfInts = sumOfInts + arrayOfInts[index];
}
console.log(sumOfInts);  // Prints 6000
```

#### Array Problems
- Create an array, loop through each element and print out the index and value.
- Create and array filled with 5 elements, print it out, then create a reverse of the first array, print it out.
- Write a function defined as `sortArray(arr)` that takes an array of integers and sorts them from smallest integer
  to largest integer.
- Write a function defined as `combineArrays(arr1, arr2)` that takes in two arrays and combines them into one
  and returns the combined array: `combineArrays([1, 2], [3]) -> [1, 2, 3]`
- Write a function defined as `getSize(arr)` that takes in an array and gets the size of it.
- Write a function defined as `getSum(arr)` that takes in an array of ints and gets the sum of them.
- Write a function defined as `createString(arr)` that takes in an array of strings and returns one long string.