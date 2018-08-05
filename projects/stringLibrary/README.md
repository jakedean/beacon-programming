### The Project

In this project we will create a library with common string funcitons.  These are actions we might want
to take on strings in our programs.  These functions all exist in the standard JavaScript string library
but we will create our own version of those to explore how they might work underneath the hood.  Here are
the functions we are going to want to add to our string library:

- findCharacter(str, charToFind) -> first index of charToFind or -1 if charToFind not in str.
- findString(str, strToFind) -> first index of the strToFind or -1 if strToFind not in str.
- replaceChar(str, charToReplace, newChar) -> replace each charToReplace with newChar in str.
- replaceString(str, strToReplace, newString) -> replace each strToReplace with newString in str.
- characterAtIndex(str, index) -> find the character at the index that was passed in.
- split(str, charToSplitOn) -> split the string on the charToSplitON and return an array of pieces
- trim(str) -> trim any whitespace off of a string from the front and back and return the trimmed string.
- reverse(str) -> reverse the string and return it.
- truncate(str, length) -> truncate the string at this length and return the truncated string.

Here is how the Library should work:

```javascript
var stringLibrary = new StringLibrary();

// should return 2 because 'y' is at index 2 of the string...
var charIndex = stringLibrary.findIndexOfCharacter('hey there', 'y');
// should return -1 becuase 'z' is not in the string at all..
var charIndex = stringLibrary.findIndexOfCharacter('hey there', 'z');

// Should return 4 because 'the' starts at index 4 in the string
var stringIndex = stringLibrary.findIndexOfString('hey there', 'the');
// Should return -1 because 'bat' is not in the string at all.
var stringIndex = stringLibrary.findIndexOfString('hey there', 'bat');

// Should return 'nzw zngland' because we have replaced 'e' with 'z'
var replacedString = stringLibrary.replaceCharacter('new england', 'e', 'z');
// Should return 'new england' because we have tried to replace 'y' but there
// were no 'y' characters in the string.
var repalcedString = stringLibrary.replaceCharacter('new england', 'y', 'z');

// Should return 's' because 's' is the 2nd index in the string.
var char = stringLibrary.characterAtIndex('boston, massachusetts', 2);
// Should return -1 becuase there is no character at index 100 in our string.
var char = stringLibrary.characterAtIndex('boston, massachusetts', 100);

// Should return ['new', 'york', 'rangers'] as we split on ' '
var splitString = stringLibrary.split('new york rangers', ' ');
// Should return ['boston bruins'] because we can't split on ',' there are no ',' characters
// in the string.
var splitString = stringLibrary.split('boston bruins', ',');

// Should return 'Beacon Street' because we have trimmed off the whitespace at the front and back.
var trimmedString = stringLibrary.trim('    Beacon Street  ');
// Should return 'Beacon Street' because we did not need to trim off any whitespace from the front or back.
var trimmedString = stringLibrary.trim('Beacon Street');

// Should return 'notsob' as that is the reversed version of 'boston'
var reversedString = stringLibrary.reverse('boston');

// Should return 'boston mass' because we truncated at length of 11.
var truncatedString = stringLibrary.truncate('boston massachusetts', 11);
// shoulud return 'boston massachusetts' because the truncate length was longer than the string, so
// return the whole thing.
var truncatedString = stringLibrary.truncate('boston massachusetts', 100);
```

Try to create this library without using many built in javascript funcitons.  In real production
code of course you would use the built in functions but this is a great way to learn and get a sense
for what is happening in those built in functions.