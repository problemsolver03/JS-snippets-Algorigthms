var isPalindrome = function (s) {
  // repalcing all special characeters and white space from the input
  let replaceSpace = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/\s/g, "")
    .toLowerCase();

  // if replaced string is empty returning true
  if (replaceSpace == "") {
    return true;
  }
  // else coverting reversed string to an array and converting it back to string for comparison
  else {
    let reverseString = replaceSpace.split("").reverse().join("");
    console.log(replaceSpace, reverseString);

    if (replaceSpace == reverseString) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
