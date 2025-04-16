var createCounter = function (n) {
  let counter = n;
  let arr = [counter];
  return function () {
    console.log(counter);

    arr.push(counter + 1);
    counter++;
    return arr;
  };
};

console.log(createCounter(1)());
console.log(createCounter(1)());
