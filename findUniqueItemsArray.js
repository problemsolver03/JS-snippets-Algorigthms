// declate function findUniqyeArr
// function accepts sorted array as an argument
// if array length < 1 return 0
// create a pointer for start index
// create a pointer for comparing array items
// compare the start and next index in array
// if equals dont change anything
// if not increment start index by the next index item
// return start index+1

const findUniqueValuesInArr = (arr) => {
  if (arr.length < 1) {
    return 0;
  } else {
    let uniqueItems = 1; // if array length is more than 0 , its guranteed one unique value exists
    for (let i = 0; i < arr.length - 1; i++) {
      // i is the pointer for first item
      let j = i + 1; //pointer reference for next value in array
      if (arr[i] !== arr[j]) {
        uniqueItems++; // incrementing uniquet items if values are not equal
      }
    }
    return uniqueItems;
  }
};

console.log(findUniqueValuesInArr([1]));
