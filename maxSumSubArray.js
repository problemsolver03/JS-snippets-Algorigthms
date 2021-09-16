// find the larget sum of sub array in array based on subarray length

//define function maxSumSubArray
// array length is 0 return null
// define variables max
// loop through the first items in sub array and add all items and store it to on max variable
// loop throug array items
// set start index to subArrayLength

const maxSumSubArray = (arr, num) => {
  if (arr.length < 1) {
    return null; // nothing to sum up
  } else if (arr.length < num) {
    return null; // out of range
  } else {
    // for valid cases
    let max = 0;
    for (let j = 0; j < num; j++) {
      max += arr[j];
    }
    if (arr.length === num) {
      console.log(max);
      return max;
    }

    let temp = 0;
    for (let i = 1; i < arr.length; i++) {
      let subtractor = arr[i - 1];
      let addition = arr[num + i - 1];

      temp = max - subtractor + addition;
      if (temp > max) {
        max = temp;
      }
    }

    console.log(max);
    return max;
  }
};

maxSumSubArray([1, 2, 3, 4, 5], 4);
