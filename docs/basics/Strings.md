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

- Define a variable that holds a string, print out each character one at a time to the console
- Define two string variables, concatonate them (add them) together to form a new string.
- Define a string variable, print it out, now reverse that string, print out the reversed string.
- Define a function called `length` that accepts a string and returns the length of the string.
- Define a function called `isSubstring(sub, full)` that takes a sub string and a full string
  and returns `True` if the substring can be found in the full, `False` otherwise.
- Define a function called `split(str, splitCharacter)` that accepts a string to split and
  a character to split on.  Return an array of the string after applying the split.
  `split('jake,is,cool', ',') -> ['jake', 'is', 'cool']`
- Define a function called `getFirstOccuranceIndex(str, characterToLookFor)` that takes a string
  and a character to look for in the string and tells us what string index the character first
  appears at, if it does not appear at all then return `-1`
  `getFirstOccuranceIndex('jake is cool', 'c') -> 8`
- Define a function called `getNumberOccurances(str, characterToLookFor)` that takes a string
  and a character to look for in the string and finds out how many times the character appears
  `getNumberOccurances('Boston Massachusetts', 's') -> 4`
- Define a function called `replaceInString(str, findChar, replaceChar)` that will take a string,
  a character to find and a character to use in the relacement.
  `repalceInString('hey dude', 'e', 'y') -> 'hyy dudy'`