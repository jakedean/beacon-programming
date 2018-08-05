
class StringLibrary {

  /**
   * We will find the first index of the character in the string and return the index, if the character does not
   * exist in the string we will return -1.
   *
   * @param {String} str        The string we are searching to find the character in.
   * @param {String} charToFind The character we are trying to find in the string.
   */
  findIndexOfCharacter(str, charToFind) {
    for(var strIndex = 0; strIndex < str.length; strIndex++) {
      // If we have matched the character we are done and can return the index of the string that matched.
      if (str[strIndex] === charToFind) {
        return strIndex;
      }
    }
    // We were not able to find the character in the string, so return -1 to indicate the character is
    // not in the string.
    return -1;
  }

  /**
   * Try to find the index of strToFind within str, if you can't find any occurance of strToFind within str
   * then return -1.  if we passed in ('cheeseburger', 'burger') you should return 6, if you pass in
   * ('cheeseburger', 'hot dog') you should return -1.
   * @param {String} str       The string we will search for strToFind withhin.
   * @param {String} strToFind The string we are trying to locate within str.
   */
  findIndexOfString(str, strToFind) {
    // If strToFind is longer then str we can't find strToFind within str so return -1 now.
    if (strToFind.length > str.length) {
      return -1;
    }

    // We can loop through the str for each letter and try to match the strToFind from each
    // index to see if we have a match.  We don't have to loop to the end of str because consider this
    // example: str = 'cheeseburger' strToFind 'burger', we know that our strToFind will take up 6 characters
    // so we really can stop as soon as there are 5 characters left in our str so the last one we have to
    // check in 'cheeseburger' is index 6 or letter b.
    for (var strIndex = 0; strIndex < (str.length - strToFind.length); strIndex++) {
      for (var strToFindIndex = 0; strToFindIndex < strToFind.length; strToFindIndex++) {
        // We don't have a match so break out of the inner loop and go to the next index in the str, try from there.
        if (str[strIndex + strToFindIndex] !== strToFind[strToFindIndex]) {
          break;
        } else if (strToFindIndex === strToFind.length - 1) {
          // We had a match and this is the last character in the strToFind!  This means we have matched all of the
          // strToFInd, so return the index of str that we were able to find this match
          return strIndex;
        }
      }
    }
    // Oh no! we were able to check for a match in str from every index but were not able to get a metch,
    // so we have to return -1 to show that there was no match at all.
    return -1;
  }

  /**
   * Replace a character in a string with another character:
   * ('jake', 'a', 'z') -> 'jzke'
   *
   * @param {String} str           The string we are looking to replace characters in.
   * @param {String} charToReplace The character we are trying to replace.
   * @param {String} replaceValue  The character we are replacing with.
   */
  replaceCharacter(str, charToReplace, replaceValue) {
    // We will build up our new string that will have all instances of charToReplace as replaceValue.
    var newString = '';
    for (var strIndex = 0; strIndex < str.length; strIndex++) {
      // Have we hit a charToReplace? If so this value should be replaceValue.
      if (str[strIndex] === charToReplace) {
        newString += replaceValue;
        // This was not charToReplace so just leave it as is.
      } else {
        newString += str[strIndex];
      }
    }
    return newString;
  }

  /**
   * Return the character at the index we are passing in.
   * ('jake', 1) returns 'a'
   * ('jake', 50) returns -1
   *
   * @param {String} str       The string we are checking to get the character at the index.
   * @param {String} charIndex The index we are looking to check at.
   */
  characterAtIndex(str, charIndex) {
    if (charIndex > str.length - 1) {
      return -1;
    }

    return str[charIndex];
  }

}