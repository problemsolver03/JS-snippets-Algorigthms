/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

*/

var romanToInt = function (s) {
  let romanObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let romanArr = s.split("");
  let sum = 0;
  for (let i = 0; i < romanArr.length; i++) {
    if (
      romanArr[i + 1] !== undefined &&
      romanObject[romanArr[i]] < romanObject[romanArr[i + 1]]
    ) {
      sum += romanObject[romanArr[i + 1]] - romanObject[romanArr[i]];
      i++;
    } else {
      sum += romanObject[romanArr[i]];
    }
  }

  return sum;
};

console.log(romanToInt("LVIII"));
