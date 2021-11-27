function findMatchStrings(str, matchStr) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < matchStr.length; j++) {
      if (str[i + j] !== matchStr[j]) break;
      if (j === matchStr.length - 1) count++;
    }
  }
  return count;
}

console.log(findMatchStrings("cool boy boy cool", "cool"));
