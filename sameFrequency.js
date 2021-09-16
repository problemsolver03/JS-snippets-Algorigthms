function sameFrequency(num1, num2) {
  let strConverter = (num) => {
    return Number(num.toString().split("").sort().join(""));
  };

  let check = strConverter(num1) === strConverter(num2);
  return check;
}

console.log(sameFrequency(281, 188));
