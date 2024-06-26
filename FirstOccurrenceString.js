//haystack = "sadbutsad", needle = "sad"

var strStr = function (haystack, needle) {
  let returnIndex = -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let match = haystack.substring(i, needle.length + i);
      if (match === needle) {
        returnIndex = i;
        break;
      }
    }
  }
  return returnIndex;
};

console.log(strStr("good", "ood"));
