function findMatchStrings(str, matchStr) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = index; j < matchStr.length; j++) {
      if (str[i] === matchStr[j]) {
        index++;
        i++;
      } else {
        index = 0;
      }
    }
    if (index === matchStr.length) {
      index = 0;
      count++;
    }
  }
  return count;
}

console.log(findMatchStrings("cool boy boy cool", "bo"));
