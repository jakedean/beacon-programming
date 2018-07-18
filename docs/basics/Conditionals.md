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