//basic
function sum(num) {
  if (num === 1) {
    return 1;
  }
  return num + sum(num - 1);
}

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * sum(num - 1);
}
console.log(factorial(3));
