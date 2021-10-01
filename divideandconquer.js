const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dnc = (arr, findItem) => {
  let arrCopy = [...arr];
  let arrLength = Math.floor(arrCopy.length / 2);
  console.log(arrCopy, arrLength);
  if (arrLength < 0) {
    return null;
  } else if (arrCopy[arrLength] < findItem) {
    arrCopy = arrCopy.splice(arrLength);
    return dnc(arrCopy, findItem);
  } else if (arrCopy[arrLength] > findItem) {
    arrCopy = arrCopy.splice(0, arrLength);

    return dnc(arrCopy, findItem);
  } else if (arrCopy[arrLength] === findItem) {
    return true;
  }
};

console.log(dnc(arr, 1));
