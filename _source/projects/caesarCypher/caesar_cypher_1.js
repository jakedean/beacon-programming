class CaesarCypher {
  constructor() {
    // Define an alphabet as in instance variable so all of our methods will have access
    // to it through this.alphabet.  The order here must match the real order of the alphabet.
    this.alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', ',', '.', '!'
    ];
  }

  /**
   * Take in a plain text phrase and an offset number to shift by and return the shifted string.
   * If we pass in 'abc' and 3 we will return 'def'.
   *
   * @param {String} phrase Our plain text phrase we are looking to encrypt.
   * @param {Number} offset The number of characters we want to shift by to get our encryption.
   */
  encrypt(phrase, offset) {
    var encryptedString = '';
    for (var indexInPhrase = 0; indexInPhrase < phrase.length; indexInPhrase++) {
      // For this character in our phrase we need to find at what index in our alphabet
      // it occurs so we can then shift it by the offset amount.
      var alphabetIndex = this.getAlphabetIndex(phrase.charAt(indexInPhrase));
      // The alphabet index + our offset COULD be a larger number then the length
      // of our alphabet -> imagine our character was 'z' and the offset was 20...
      var encryptedIndex = (alphabetIndex + offset) % this.alphabet.length;
      var encryptedLetter = this.alphabet[encryptedIndex];
      encryptedString += encryptedLetter;
    }
    return encryptedString;
  }

  /**
   * Take in a single character and find the index of that character in our alphabet array.
   *
   * @param {String} charToFind The character we are looking to find the index of, 'a' returns 0
   *                            'b' returns 1 and so on.
   */
  getAlphabetIndex(charToFind) {
    for (var alphabetIndex = 0; alphabetIndex < this.alphabet.length; alphabetIndex++) {
      if (this.alphabet[alphabetIndex] === charToFind) {
        return alphabetIndex;
      }
    }
    // If we could not match the character tell the caller that they passed in an unsupported character.
    throw "We don't support character: " + charToFind +
          ", here is our this of  supported characters: " + this.alphabet.join(',');
  }
}