# What are Arrays?

Arrays are a way to group items of the same type together. Imagine we have a list of urls
that we want to display for our user on our website. We need a way to group them all into a
bucket so we can show them one by one. You might do that like this:

```javascript
// Our links are now grouped into a single bucket so we can move them around in our program
// as one unit.
var urlArray = ["google.com", "wayfair.com", "hubspot.com"];

// Now we can go through each one and display it to the console.
for (var index = 0; index < urlArray.length; index++) {
  console.log(urlArray[index]);
}
```

The way things are stored and retreived in arrays is through indexes. What this means
is I need a way to access a url from our `urlArray`. What if I want to just find out
what the first url is in `urlArray`? For this we will look up the value at the first index
of the array. Here is an example of the indexes and values of our array:

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

The values within an array don't have to be strings as we have shown thus far, they could be integers
or dictionaries for example:

```javascript
var arrayOfIntegers = [1000, 2000, 3000];
console.log(arrayOfIntegers[0]); // Prints 1000

var arrayOfDictionaries = [{ name: "Jake" }, { name: "Tony" }];
console.log(arrayOfDictionaries[1]); // Prints {'name': 'Tony'}
```

As was seen in the first example we often times want to generate an array so we can display information
on a web page. The way looping through a list works is as follows:

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

# Problems

1.

`Uses: Variables, Loops`

```javascript
// Create an array containing some values.
// Loop through each element and print out the index and value.
```

<details><summary>HINT</summary>

<p>
  The for loop's starting condition should be 0. Its' ending condition should be the length of your array. Increment the starting condition by 1.
</p>
</details>

2.

`Uses: Variables, Loops`

```javascript
// Create an array filled with 5 elements and print it out
// Now create a reverse of the first array using a loop and print it out.
```

<details><summary>HINT</summary>

<p>
  The for loop's starting condition should be the length of your array. Its' ending condition should be 0. Decrement the starting condition by 1.
</p>
</details>

3.

`Uses: Variables, Loops, Functions, Conditionals`

```javascript
//Write a function defined as sortArray(arr) that takes an array of integers and sorts them
// from smallest integer to largest integer.
// calling sortArr([3,7,1,9]) would return [1, 3, 7, 9]
```

4.

```javascript
// Write a function defined as combineArrays(arr1, arr2) that takes in two arrays and combines them into one
// and returns the combined array, calling combineArrays([1, 2], [3]) should return [1, 2, 3]
// Reference the Loops basics and Functions basics docs before trying this problem.
```

5.

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

```javascript
// Write a function defined as createString(arr) that takes in an array of strings and returns one long string
// where the words are separated by spaces.
// Calling createString(['Hey', 'my', 'name', 'is', 'Jake']) should return 'Hey my name is jake'
// Reference the Loops basics and Functions basics docs before trying this problem.
```
