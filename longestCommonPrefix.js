// var longestCommonPrefix = function (strs) {
//   let prefix = "";
//   let firstChar = strs[0][0];
//   let match = 0;

//   if (strs.length < 2) {
//     return strs[0];
//   }

//   for (let i = 0; i < strs.length; i++) {
//     for (let j = 0; j <= strs.length; j++) {
//       if (strs[i][j] === strs[i][i]) {
//         console.log(strs[i][j], firstChar);
//         match++;
//       }
//       if (match === strs.length - 1) {
//         prefix += strs[i][j];
//         firstChar = strs[0][prefix.length];
//         match = 0;
//       }
//     }
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(["flo", "flwe"]));

// output is fl;

// iterate to the first string and compare each character of the string with all other SVGStringList;

// if the character matches is all strings add it to retun output.SVGStringList

var longestCommonPrefix = function (strs) {
  let firstword = strs[0];
  let prefix = "";
  let length = firstword.length < 2 ? 2 : firstword.length + 1;
  for (let i = 0; i < length - 1; i++) {
    let firstChar = firstword[i];

    for (let j = 0; j < strs.length; j++) {
      console.log(j);
      if (firstChar === strs[i + 1][j]) {
        prefix += strs[i][j];
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["low", "lo", "lo"]));
