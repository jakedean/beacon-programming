{% include navigation.html %}

Strings are a series of letters that make up a word or phrase that you might want
to have in code.  You might want strings to store a Product SKU on an ecommerce site
or the email of a user.  Here are some examples of strings in JS:

```javascript
var productSku = "sku12345";
var userEmail = "jakeDean@gmail.com";
```

To access letters of a string, we can access from left to right starting with index 0.
For example in the string "jakeDean" here are the following indexes:
jakeDean
01234567

So if we wanted to acess just the first letter of the string we could use code like
this:

```javascript
var myName = "jake";
var firstLetterOfMyName = myName[0]; // value will be "j"
var secondLetterOfMyName = myName[1]; // value will be "a"
```

Strings can be added together to create new strings like so:

```javascript
var firstName = "Jake";
var lastName = "Dean";
var fullName = firstName + " " + lastName; // value will be "Jake Dean"
```

#### String Problems

1.
```javascript
// Define a variable that holds a string, print out each character one at a time to the console
```
2.
```javascript
// Define two string variables, concatonate them (add them) together to form a new string.
```
3.
```javascript
// Define a string variable, print it out, now reverse that string, print out the reversed string.
// Reference the Loops basics doc before trying this exercise.
```
4.
```javascript
// Define a function called length(inputStr) that accepts a string and returns the length of the string.
// Calling length('jake') returns 4
// Reference the Functions basics docs before trying this exercise.
```
5.
```javascript
// Define a function called isSubstring(sub, full) that takes a sub string and a full string
// and returns `True` if the substring can be found in the full, `False` otherwise.
// Calling isSubstring('at', 'bat') returns True.
// Reference the Functions basics docs before trying this exercise.
```
6.
```javascript
// Define a function called split(str, splitCharacter) that accepts a string to split and
// a character to split on.  Return an array of the string after applying the split.
// Calling `split('jake,is,cool', ',') -> ['jake', 'is', 'cool']`
// Reference the Functions basics and Arrays basics docs before trying this exercise.
```
7.
```javascript
// Define a function called getFirstOccuranceIndex(str, characterToLookFor) that takes a string
// and a character to look for in the string and tells us what string index the character first
// appears at, if it does not appear at all then return `-1`
// getFirstOccuranceIndex('jake is cool', 'c') returns 8
// Reference the Functions basics docs before trying this exercise.
```
8.
```javascript
// Define a function called getNumberOccurances(str, characterToLookFor) that takes a string
// and a character to look for in the string and finds out how many times the character appears
// getNumberOccurances('Boston Massachusetts', 's')  returns 4
// Reference the Functions basics docs before trying this exercise.
```
9.
```javascript
// Define a function called replaceInString(str, findChar, replaceChar) that will take a string,
// a character to find and a character to use in the relacement.
// Calling repalceInString('hey dude', 'e', 'y') returns 'hyy dudy'
// Reference the Functions basics docs before trying this exercise.
```