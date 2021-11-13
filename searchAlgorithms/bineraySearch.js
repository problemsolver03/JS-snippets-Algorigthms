const binarySearch = (arr, value) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  let middlePointer =
    Math.floor(rightPointer / 2) === 0 ? 1 : Math.floor(rightPointer / 2);
  if (arr.length === 0) {
    return -1;
  } else if (arr[middlePointer] === value) {
    return middlePointer;
  } else if (arr[middlePointer] > value) {
    arr.splice(middlePointer);
    return binarySearch(arr.splice(arr), value);
  } else {
    return binarySearch(arr.splice(middlePointer), value);
  }
};

binarySearch([1, 2, 3, 4, 5, 6], 4);
