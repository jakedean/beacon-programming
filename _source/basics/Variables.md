{% include navigation.html %}

Variables are a way to store pieces of data during a program. The types of data you would most commonly store are:
```javascript
var stringVariable = "the string variable"; // A String
var numberVariable = 10; // A Number
var arrayVariable = [1, 2, 3]; // An array of items, in this case items are integers
// A key value object
var objectVariable = {'key': 'val', 'name': 'Jake', 'country': 'USA'};
```

The reason we want variables is that it gives us a way to incrementally build a result in a program. Imagine we want to format a user's full name to display on a web page and we need to pull the first name and last name out of a database.
With variables it might look like this:
```javascript
var firstName = "Jake";
var lastName = "Dean";
// Would hold the value of "Jake Dean" which is how we want to display it!
var fullName = firstName + " " + lastName;
```

Well, what if you did not have the intermediate variables `firstName` and `lastName`? Then you would have to pull the `fullName` directly out of the database in that format, BUT you might have the user's name stored as a first name and last name separately. Variables give you the flexibility to store different pieces of information and combine them in any way you might like.

Another simple example is adding two numbers, here we want to have a variable for each of the two numbers being added AND
a variable for the result:
```javascript
var firstNumber = 1;
var secondNumber = 2;
// Would hold 3
var sumOfTwoNumbers = firstNumber + secondNumber;
```
#### Variable Problems

1.
```javascript
// Define a variable and set a value to it

// Print the value to the console

// Set a new value to it and print it again.
```

2.
```javascript
 var tweet = "Randy loves cheeseburgers!";
 var count = 0;

 count = count + 10;
 tweet = tweet + count;

 // what is the value of tweet and count now?

 count = count * 10;
 tweet = count + tweet;

 // what is the value of tweet and count now?

 count = count * 100;
 tweet = tweet + ". Mans gotta eat.";

 // what is the value of tweet and count now?
```