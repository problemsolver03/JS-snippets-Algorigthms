function fibNth(num) {
  let result = [1];

  function fibCreate(num, index) {
    if (index < 2 && index > 0) {
      result.push(1);
      return fibCreate(num, index + 1);
    } else if (num === index) {
      result.push(result[result.length - 1] + result[result.length - 2]);
      return;
    } else {
      result.push(result[result.length - 1] + result[result.length - 2]);
      return fibCreate(num, index + 1);
    }
  }

  fibCreate(num, 1);
  return result[num - 1];
}

fibNth(4); //3
