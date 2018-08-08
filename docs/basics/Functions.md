# Video
[Function Introduction](https://www.youtube.com/watch?v=8YR08Fe74D4)

## What are Functions?

Functions are pieces of reusable code.  Here is an example of code that does not use functions.

```javascript
// This code will not use functions.
var userName = 'Jake';
// Prints 'Hello Jake, how are you today?'
console.log('Hello ' + userName + ', how are you today?');

userName = 'Matt';
// Prints 'Hello Matt, how are you today?'
console.log('Hello ' + userName + ', how are you today?');
```

Notice we must repeat `console.log('Hello ' + userName + ', how are you today?');` to print our statement with `userName = 'Jake'` and `userName = 'Matt'`.  We will now rewrite this with a function.

```javascript
//The function definition here shows what this function will do once it is called.
// This function here will be passed a userName by the caller, and it will be used to
// format the message.
function greetTheUser(userName) {
  console.log('Hello ' + userName + ', how are you today?');
}

// Call the function while passing in 'Jake' as the userName
// Prints 'Hello Jake, how are you today?'
greetTheUser('Jake');

// Now call the same function while passing in 'Matt' as the userName
// Prints 'Hello Matt, how are you today?'
greetTheUser('Matt');
```

In the example above we reuse the code that is inside `greetTheUser` more than once so we don't have to rewrite the logic.
Here is another example of a function that adds two numbers and `return` the resulting sum to the caller of the function.

```javascript
function addTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// The returned value from our function will be 3, so sum will be set to 3 here
var sum = addTwoNumbers(1, 2);
// Will print out 3
console.log(sum);

// The returned value from our function will be 25, so sum will be set to 25 here
var secondSum = addTwoNumbers(10, 15);
// Will print out 25
console.log(secondSum);
```

We can add conditional statements to our functions to have more than one code path...
```javascript
function isNumberEven(numberToTest) {
  // Test if the number is devisible by 2 or not...
  if (numberToTest % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// firstResult would be set to false
var firstResult = isNumberEven(5);
// secondResult would be set to true
var secondResult = isNumberEven(2);
```

## Problems

1.
`Uses: Functions`
<details><summary>HINT</summary><p>
  
  <pre><code>
function squareOfInput(input) {

}

squareOfInput(5)
</pre></code>
  
</p></details>

```javascript
// Write a function called squareOfInput(input) that returns the square of the input.
// Calling squareOfInput(5) should return 25
```

2.
`Uses: Functions, Conditionals`
<details><summary>HINT</summary><p>
  
  <pre><code>
function squareOfInputIfEven(input) {
  if (inputIsEvent) {
  } else {
  }
}

squareOfInput(5)
</pre></code>
  
</p></details>

```javascript
// Write a function called squareOfInputIfEven(input) that returns the square of the input
// only if that input is even, else return 0.  Calling squareOfInputIfEven(2) returns 4
// squareOfInputIfEven(3) returns 0
```

3.
`Uses: Functions, Arrays`
<details><summary>HINT</summary><p>
  
  <pre><code>
function findEvens(input) {
  var evens = [];
  for () {
    
  }
  return evens
}

findEvens([5,1,2,3,4,7])
</pre></code>
  
</p></details>

```javascript
// Write a function called findEvens(inputArr) that takes an array of ints and returns an array
// of only even ints
// Calling findEvens([1, 2, 3, 4]) returns [2,4]
```

4.
`Uses: Functions, Strings, Conditionals`
<details><summary>HINT</summary><p>
  
  <pre><code>
function containsSub(subString, fullString) {
  
}

containsSub('at', 'bat')
</pre></code>
  
</p></details>

```javascript
// Write a function called containsSub(subString, fullString) that takes two strings and returns true if the
// substring is in the full string, false otherwise.
// Calling containsSub('at', 'bat') -> true, containsSub('dude', 'Tony Nardi') -> false
// Take a look at the Strings basics doc if you are having trouble with this problem.
```
