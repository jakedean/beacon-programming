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

}