const binarySearch = (arr, value) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let median = Math.floor((leftPointer + rightPointer) / 2);
  while (arr[median] !== value && leftPointer <= rightPointer) {
    if (value < arr[median]) {
      rightPointer = median - 1;
    } else {
      leftPointer = median + 1;
    }
    median = Math.floor((leftPointer + rightPointer) / 2);
  }
  return arr[median] === value ? median : -1;
};

let found = binarySearch([1, 2, 3, 4, 5, 6], 5);
console.log(found);
