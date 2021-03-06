{% include navigation.html %}

# Video
[Array Introduction](https://www.youtube.com/watch?v=o3kLpOSHubY)

## What are Arrays?

Arrays are a way for programmers to organize information as a list of items. Imagine we have a list of urls
that we want to display for our user on our website. We need a way to group them all so we can show them one by one. You might do that like this:

```javascript
// Our links are now grouped into a single bucket so we can move them around in our program
// as one unit.
var urlArray = ["google.com", "wayfair.com", "hubspot.com"];

// Now we can go through each one and display it to the console.
for (var index = 0; index < urlArray.length; index++) {
  console.log(urlArray[index]);
}
```

Things are stored and retreived in arrays through indexes. Saying "what value is at index 0?" is the same as saying "what value is at position 0?". For example, what if I want to find out what the first url is in `urlArray`? For this we will look up the value at the first index of the array. Here is an example of the indexes and values of our array:

```javascript
// index value:     0              1              2
var urlArray = ["google.com", "wayfair.com", "hubspot.com"];
```

You will notice the first index value is 0 and from there we just increment the index by one
for each element in our array.

```javascript
// Indexes go from 0 to 2 here
var carsArray = ["Chevrolet", "Honda", "Toyota"];
console.log(carsArray[0]); // Prints 'Chevrolet'
console.log(carsArray[1]); // Prints 'Honda'
console.log(carsArray[2]); // Prints 'Toyota'

// Indexes go from 0 to 1 here
var hockeyPlayers = ["Patrick Kane", "Riley Nash"];
console.log(hockeyPlayers[0]); // Prints 'Patrick Kane'
console.log(hockeyPlayers[1]); // Prints 'Riley Nash'

// If you try to access indexes that don't exist, 'undefined' will be printed because
// there is not a value defined at that index, here are two examples.
console.log(hockeyPlayers[2]); // Prints 'undefined'
console.log(carsArray[1000]); // Prints 'undefined'
```

The values within an array don't have to be strings as we have shown thus far, they could be integers, objects, or arrays for example:

```javascript
var arrayOfIntegers = [1000, 2000, 3000];
console.log(arrayOfIntegers[0]); // Prints 1000

var arrayOfDictionaries = [{ name: "Jake" }, { name: "Tony" }];
console.log(arrayOfDictionaries[1]); // Prints {'name': 'Tony'}
```

As was seen in the first example we often times want to generate an array so we can display information
on a web page. The way looping through an array works is as follows:

```javascript
var arrayOfInts = [1000, 2000, 3000];
var sumOfInts = 0;

// Now we will loop through the values of arrayOfInts one at a time from left to
// right.
// For each value we will increase sumOfInts.
// Start with our index at 0 and go all of the way until the index is 2, this will
// cover all of the indexes in our array and thus access all of our values.
for (var index = 0; index < arrayOfInts.length; index++) {
  // The first iteration of this loop index will be 0, then 1 then 2.
  sumOfInts = sumOfInts + arrayOfInts[index];
}
console.log(sumOfInts); // Prints 6000
```

Notice in our for loop we use `arrayOfInts.length`. The `.length` property of the array provides us with the number of items the array contains. Here are some examples:

```
var emptyArray = [];
emptyArray.length === 0;

var arrayWith3Items = [1,2,3];
arrayWith3Items.length === 3;
```

## Problemsss

1.

`Uses: Variables, Loops`

{% include hint.html content="
  The for loop's starting condition should be 0. Its' ending condition should be the length of your array. Increment the starting condition by 1.
" %}

```javascript
// Create an array containing some values.
// Loop through each element and print out the index and value.
```

2.

`Uses: Variables, Loops`

{% include hint.html content="
  var array = ['a', 'b', 'c', 'd', 'e']
  for () {

  }
  for () {
  
  }
" %}

```javascript
// Create an array filled with 5 elements and print it out
// Now create a reverse of the first array using a loop and print it out.
```

3.

`Uses: Variables, Loops, Functions, Conditionals`

```javascript
//Write a function defined as sortArray(arr) that takes an array of integers and sorts them
// from smallest integer to largest integer.
// calling sortArr([3,7,1,9]) would return [1, 3, 7, 9]
```

4.

`Uses: Functions, Loops, Variables`

{% include hint.html content="
function combineArrays(arr1, arr2) {
  var combinedArray = [];
  
  for () {
  
  }

  for () {
  
  }

  return combinedArray;
}

combineArrays([1,2], [3,4,5])
" %}


```javascript
// Write a function defined as combineArrays(arr1, arr2) that takes in two arrays and combines them into one
// and returns the combined array, calling combineArrays([1, 2], [3]) should return [1, 2, 3]
```

5.

`Uses: Functions, Loops, Variables`

{% include hint.html content="
function getSize(arr) {
  var size = 0;
  
  for () {
  
  }

  return size;
}

getSize([1,2,8])
" %}

```javascript
// Write a function defined as `getSize(arr)` that takes in an array and gets the size of it.
// Calling getSize([1, 2, 8]) should return 3.
// Reference the Loops basics and Functions basics docs before trying this problem.
```

6.

```javascript
// Write a function defined as getSum(arr) that takes in an array of ints and gets the sum of them.
// Calling getSum([1,2,3]) should return 6

// Now write one called getAverage(arr) that takes in an array of ints and gets the average of them.
// Calling getAverage([0, 5, 10]) should return 5.

// Last, write a function called getMedian(arr) that takes in an array of ints and get the median.
// Calling getMedian([2, 8, 7, 7, 7]) should return 7

// Reference the Loops basics and Functions basics docs before trying this problem.
```

7.

`Uses: Functions, Loops, Variables`

{% include hint.html content="
function createString(arr) {
  var longString = \"\"
  for () {
  
  }
  return longString;
}

createString(['hey', 'my', 'name', 'is', 'jake'])
" %}

```javascript
// Write a function defined as createString(arr) that takes in an array of strings and returns one long string
// where the words are separated by spaces.
// Calling createString(['Hey', 'my', 'name', 'is', 'Jake']) should return 'Hey my name is jake'
```
