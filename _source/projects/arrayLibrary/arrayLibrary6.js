class ArrayLibrary {

  /**
   * Return true if we can find the element in the array, false otherwise.
   * ([1, 2, 3], 1) -> true
   *
   * @param {Array} arr      The array we are checking for the element
   * @param {Object} element The element we are going to look in the array for.
   */
  contains(arr, element) {
    for (var arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      if (arr[arrIndex] === element) {
        return true;
      }
    }
    return false;
  }

  /**
   * Return the count of how many times the item exists in the array.
   * (['jake', 'tony', 'jake'], 'jake') -> 'jake'
   *
   * @param {Array} arr   The array we are goiong to look through for the item passed in.
   * @param {Object} item The value we will look for in the array that has been passed in.
   */
  countOfItem(arr, item) {
    var currentCount = 0;
    for (var arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      if (arr[arrIndex] === item) {
        currentCount++;
      }
    }
    return currentCount;
  }

  /**
   * Return the two arrays added into a single array, we will not alter any of the
   * arrays but rather we will create a new one.
   * ([1, 2], [3]) -> [1, 2, 3]
   *
   * @param {Array} firstArray  The first array we are looking to add to the second.
   * @param {Array} secondArray The second array we are looking to add to the first.
   */
  addArrays(firstArray, secondArray) {
    var finalArray = [];
    // Add everything from the first array into the final...
    for (var firstArrayIndex = 0; firstArrayIndex < firstArray.length; firstArrayIndex++) {
      finalArray.push(firstArray[firstArrayIndex]);
    }
    // Now add everything from the second array into the final...
    for (var secondArrayIndex = 0; secondArrayIndex < secondArray.length; secondArrayIndex++) {
      secondArray.push(secondArray[secondArrayIndex]);
    }
    return finalArray;
  }

  /**
   * Take in an array and a string and join the array elements on the string:
   * (['jake', 'tony', 'matt'], ',') -> 'jake,tony,matt'
   *
   * @param {Array} arr         The array we are looking to join into a string.
   * @param {String} glueString The string we are looking to put between array elements.
   */
  join(arr, glueString) {
    var joinedString = '';
    for (var arrIndex = 0; arrIndex < arr.length; arrIndex++) {
      // We only want to add the glue string if we are not on the last
      // element, so check here.
      if  (arrIndex < arr.length - 1) {
        joinedString += arr[arrIndex] + glueString;
      } else {
        // We are on the last element so don't add the glue but add the value.
        joinedString += arr[arrIndex];
      }
    }
    return joinedString;
  }

  /**
   * Take in an array and return the reversed array.  We will not be alerting hte
   * array but rather just making a new one and returning the new one.
   * ([1, 2, 3]) -> [3, 2, 1]
   *
   * @param {Array} arr The array we are looking to reverse.
   */
  reverse(arr) {
    var reversedArray = [];
    for  (var arrIndex = arr.length - 1; arrIndex >= 0; arrIndex--) {
      reversedArray.push(arr[arrIndex]);
    }
    return reversedArray;
  }

  /**
   * Take the rightmost element out of the array and return the array after removing
   * this element.
   * ([1, 2, 3]) -> [1, 2]
   *
   * @param {Array} arr The array wa are looking to take an element off of.
   */
  pop(arr) {
    var finalArray = [];
    // Stop the loop before the last element.
    for (var arrIndex = 0; arrIndex < arr.length - 1; arrIndex++) {
      finalArray.push(arr[arrIndex]);
    }
    return finalArray;
  }

}