// find the items in an sorted that sums upto to zero and return the array items, If no match found return undefined;

//simple solution
const sumZeroBasic = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let itemFirst = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let itemSecond = arr[j];
      if (itemFirst + itemSecond === 0) {
        return [itemFirst, itemSecond];
      }
    }
  }
};

const sumZeroPointers = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroBasic([-3, -2, 0, 0, 1, 2.5, 4]));
console.log(sumZeroPointers([-3, -2, 0, 0, 1, 2, 4]));
