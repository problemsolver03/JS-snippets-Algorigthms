const isOdd = (val) => val % 2 !== 0;
function somerecursive(arr, cb) {
  let result = arr.filter((a) => cb(a));
  return result.length > 0;
}

somerecursive([1, 2, 3], isOdd);
