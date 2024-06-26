var isPalindrome = function (x) {
  let conNumber = x.toString().split("").reverse().join("");
  return x.toString() === conNumber ? true : false;
};

console.log(isPalindrome(121));
