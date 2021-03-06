{% include navigation.html %}

# Loops

## Video

[Loops Introduction](https://www.youtube.com/watch?v=xIEgFdwVY7o)

## What are loops?

Loops allow you to repeat instructions over and over, without needing to write much code.

### For-Loops

Lets imagine you have an app that has thousands of users. You might represent the list of all users as an array. "for-loops" are a useful construct for iterating over the values in an array.

```javascript
var users = [
  { first: "Tony", last: "Nardi", state: "MA" },
  { first: "Jake", last: "Dean", state: "MA" },
  { first: "Randy", last: "Treverson", state: "CT" }
];
for (var index = 0; index < users.length; index++) {
  console.log(users[index]); // logs {first: 'Tony', last: 'Nardi', state: 'MA'} etc
}
```

Let's dissect the for-loop a bit.

1.  The `var index = 0` is initialized first. This is the "starting condition".
2.  If `index < users.length` is `true`, then the body of the loop is executed. This is the "ending condition".
3.  After the body of the loop is executed, `index++` is executed. This increments `index` by 1.
4.  `index < users.length` is checked again, and if true, we execute the body again and increment `index`

As you might notice, the loop will run for as many items there are in the list.

### While Loops

While loops are a similar construct to for loops. While loops are a more fitting tool for when you want to execute code until a particular condition is met.

```
var startingNumber = 0;
var isLessThan10 = true;

while (isLessThan10) {
 console.log(startingNumber);
 startingNumber++;
 isLessThan10 = startingNumber < 10;
}
```

## Problems

1.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 1 2 3 4 5 6 7 8 9 10
```

2.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 10 9 8 7 6 5 4 3 2 1
```

3.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 5 6 7 8 9 10
```

4.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 10 9 8 7 6
```

5.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 1 3 5 7 9
```

6.

`Uses: Loops`

```javascript
// Use a for loop that logs to the console:
// 10 8 6 4 2 0
```

7.

`Uses: Loops, Arrays`

{% include hint.html content="
  var array = ['hey', 'how', 'is', 'it', 'going'];
  for () {

  }
" %}

```javascript
// Loop over all elements in this array ['hey', 'how', 'is', 'it', 'going']
// and print out the array index and the array value in each iteration of the loop.
// So for the first iteration you would want to have "Index is 0, Value is 'hey'" and so on.
```

8.

`Uses: Loops, Arrays, Variables`

{% include hint.html content="
  var sum = 0;
  var numbers = [5, 35, 78, 30, 47];
  for () {

  }
" %}

```javascript
// init a variable as sum and set it to 0 initially
// Loop through this array of Numbers [5,35, 78, 30, 47] and for each iteration add the value to sum
// and print out the array index, array value and current sum for each iteration so the first
// iteration should say "Index: 0, Value: 5, currentSum: 5" and the second iteration should say
// "Index: 1, Value: 35, currentSum: 40" and so on.
```

9.

`Uses: Loops, Arrays, Variables, Strings`

{% include hint.html content="
  var str = '';
  var strArray = ['h', 'e', 'l', 'l', 'o']
  for () {

}

" %}

```javascript
// init a variable called str to ''.
// Loop through an array of strings ['h', 'e', 'l', 'l', 'o'] and build up str for each iteration.
// The first iteration should print "Index: 0, Value" 'h', currentStr: 'h'" and the second iteration
// should print "Index: 1, Value: 'e', currentStr: 'he'" and so on.
```

10.

`Uses: Loops, Arrays, Variables, Conditionals`

{% include hint.html content="
  var odds = [];
  var evens = [];
  var numbers = [4, 5, 8, 3, 9, 9];
  for () {

  }
  console.log(odds);
  console.log(evens);
" %}

```javascript
// Define two arrays, one called odds one called evens.
// Loop through this array [4, 5, 8, 3, 9, 9] and add the Number into the odds
// array if the number is odd, and to the evens array if the number is even. and
// print out the information for each iteration. So the first iteration should print
// out "Index: 0, Value: 4, oddOrEven: 'even'" At the end print out odds and you should
// see [5, 3, 9, 9] and print out evens and you should see [4, 8]
```

11.

`Uses: Loops, Arrays, Conditionals, Variables, Conditionals`

{% include hint.html content="
  var highestNumber = 0;
  for () {
    if (currentNumber > highestNumber) {
      highestNumber = currentNumber;
    }
  }
" %}

```javascript
// What is the highest number in the following array?
// [1,1,2,1.5,1.9,2.2,2.09,1.5,2.2,2.3,2.2,0,.99,.5,.02,.92,2.20,2.11,1,1,1.22,1,9,.3,.5]
```

12.

`Uses: Loops, Arrays, Variables, Conditionals`

{% include hint.html content="
  var totalIterations = 0;
  var sum = 1.5;
  while (sum < 10000000) {
    sum = sum * 1.5;
    totalIterations++
  }
  console.log(totalIterations)
" %}

```javascript
// How many iterations does it take to get to the number 10,000,000 if you only
// multiply `1.5` by itself?
```

13.

`Uses: Loops, Arrays, Variables, Conditionals`

{% include hint.html content="
  var i = 0;
  while(i < 100) {

  }
" %}
```javascript
// Loop over the numbers from 0 to 100 printing 'Even' for evens and 'Odd' for odds.
```
