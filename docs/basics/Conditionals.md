Conditionals give us the ability to branch our code.  We might have one code path we want executed if a certain condition is met
and another path executed if that condition is not met.  Here is an example:

```javascript
var usersName = "jake";

// This would end up printing "Hi Jake!" in this case...
if (usersName === "jake") {
  console.log("Hi Jake!");
} else {
  console.log("I don't know your name but hello!");
}
```

We can have more than one condition in an if statement as seen below:
```javascript
var usersFirstName = "jake";
var usersLastName = "dean";

// This would print "Who are you?" because both conditions for the
// first name and last name in the if statement are not met.
if ((usersFirstName === "jake") && (usersLastName === "smith")) {
  console.log("Hi Jake Smith!");
} else {
  console.log("Who are you?");
}
```

We can also have `or` statements, which is to say if `either` of these conditions are true then we
will execute this code path, here is an example:
```javascript
var usersFirstName = "jake";

// This would print out "Hi Jake!" becuase at least one of these conditions (usersFirstName === "jake")
// are true.
if ((usersFirstName === "jake") || (usersFirstName === "jacob")) {
  console.log("Hi Jake!");
} else {
  console.log("Who are you?");
}
```

Here is a quick reference for how conditionals work:
```javascript
var firstExample = (true && true);   // value is true
var secondExample = (true && false); // value is false
var thirdExample = (false && false); // value is false
var fourthExample = (true || false); // value is true
var fifthExample = (true || true);   // value is true
var sixthExample = (false || false); // value is false
```

#### Conditionals Problems
1.
```javascript
// Define a variable that holds and integer
// Then define a conditional that prints "Even" if the int is even and "Odd" if the int is odd.
```
2.
```javascript
// Define a variable that holds a string called firstName
// Then define a conditional that prints out "You have a short name" if
// the name is under 10 characters and "You have a long name!" if >= 10 characters
```
3.
```javascript
// Define two integers called firstInt and secondInt
// Then define a conditional that prints out "Both Even!" if they both are even
// "One Even, One Odd" if one is even and one is odd and "Both Odd" if they both are odd.
```
4.
```javascript
// Define an array of strings then define a conditional that prints "This contains the word 'Hello'"
// if the array contains 'Hello' and prints "Does not contain 'Hello'" otherwise.
```