function reverse(str) {
  function recurse(index) {
    if (str.length === index) return str.charAt(0);
    else {
      console.log(str.charAt(str.length - index));
      return `${str.charAt(str.length - index)}${recurse(index + 1)}`;
    }
  }
  return recurse(1);
}

reverse("abc");

function isPalindrome(str) {
  return str === reverse(str) ? true : false;
}
