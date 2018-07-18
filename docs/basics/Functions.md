Functions are pieces of reusable code.  Here is an example of code in a format that does not use functions and then in a format that does use functions.
```javascript
// This code will not use functions.
var userName = 'Jake';
// Prints 'Hello Jake, how are you today?'
console.log('Hello ' + userName + ', how are you today?');

userName = 'Matt';
// Prints 'Hello Matt, how are you today?'
console.log('Hello ' + userName + ', how are you today?');
```

You will notice that we had to repeat the `console.log('Hello ' + userName + ', how are you today?');` part of this code in order
to get it to print our statement with `userName = 'Jake'` then for `userName = 'Matt'`.  We will now rewrite this with a function.

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
Here is another example of a function that can add two numbers and `return` the resulting sum to the caller of the function.

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

Problems:
1. Write a function that returns the square of the input.
2. Write a function that returns the square of the input only if that input is even.