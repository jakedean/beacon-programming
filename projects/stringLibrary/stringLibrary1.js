
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

}