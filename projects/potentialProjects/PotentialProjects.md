### A list of potential projects

## String Library
- We want to implement a string library adding functions to it without using built in functions.
- findChar(str, char) -> first index of char or -1 if not in string
- findStr(str, strToFind) -> first index of the string or -1 if not in string
- replaceChar(str, charToReplace, newChar) -> string with that char replaced with the new char
- replaceString(str, strToReplace, newString) -> string with the string to replace replaced by newString
- charAt(str, index) -> find the character at the index that was passed in.
- split(str, charToSplitOn) -> split the string on the char and return an array of pieces
- trim(str) -> trim any whitespace off of a string from the front and back and return the trimmed string.

## Array Library
- Implement an array library that could be used to take actions on arrays
- contains(array, item) -> true if they array contains the item, false otherwise.
- countOfItem(array, item) -> number of times the item in array, -1 if not in array.
- addArrays(array1, array2) -> combine two arrays into one.
- join(array, glue) -> join the pieces of an array around a glue string
- reverse(array) -> return the reversed array
- pop(array) -> return an array with the last element popped off
- push(array, element) -> return an array with a new element pushed onto the front.

## Airline Reservation System
- Implement an airline reservation system where we have flights that have a to and from,
  a date and the number of first class and economy class seats.  There should be a base
  price for each flight and there should be a multiplier if you order the tickets 2 months prior
  and another muiltiplier if you order the tickets 4 months prior.
- When someone tries to buy a ticket then you should check if you have any available for that to/from
  and that date, and then if there are any available tell them how much it will cost.
- We can have classes for ReservationSystem, Flight, Customer where we can init a reservation system
  with flights, and then have a customer set max amounts they are willing to pay.
