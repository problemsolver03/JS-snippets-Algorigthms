function selectionSort(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        console.log(min);
        min = j;
        let temp = arr[0];
        arr[0] = arr[min];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}

selectionSort([3, 2, 1]);
