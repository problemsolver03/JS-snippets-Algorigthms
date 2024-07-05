var secondHighest = function (s) {
  let a = s.split("").filter((item) => {
    let match = /[0-9]/;
    return item.match(match);
  });

  let intArrs = a.map((item) => Number(item));
  let unique = new Set(intArrs);
  let uniqueArr = Array.from(unique).sort();
  console.log(uniqueArr);

  if (uniqueArr.length < 2) {
    return -1;
  } else {
    return uniqueArr[uniqueArr.length - 2];
  }
};

console.log(secondHighest("sjhtz8344"));
