### Background
A Caesar Cypher is explained on this Wikipedia page [here](https://en.wikipedia.org/wiki/Caesar_cipher)
but the basic idea is that we will shift the alphabet by a certain number of letters in such a way
that our text ends up looking like a jumbled mess of letters.

For example if we had the text "abc" and we decided to shift by 1 we would end up with the
output of "bcd".  If we had decided to shift "abc" by 2 we would end up with "cde" and so
on.

### The Project
The Caesar Cypher project is to design a class called CaesarCypher that can take in a phrase and
the number of characters to offset by and return back the "encrypted" version  of the text.  The
class should also be able  to accept an "encrypted" version of the text and an offset and return back
the "unencrypted" version of the text.  Your class should be able to function like this:

```javascript
var myCipher = new CaesarCypher();
var plainTextString = 'hi my name is jake';
var offset = 5;
var encryptedString = myCypher.encrypt(plainTextString, 5);
var decryptedString = myCypher.decrypt(encryptedString, 5);

if (decryptedString === plainTextString) {
  console.log('The Ceasar Cypher has worked!');
} else {
  console.log('Whoops, plain: ' + plainTextString + ', decrypted: ' + decryptedString + '...');
}
```