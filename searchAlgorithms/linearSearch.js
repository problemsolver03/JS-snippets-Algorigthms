function linearSearch(array, value) {
  let returnValue;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === value) {
      returnValue = element;
      break;
    } else {
      returnValue = -1;
    }
  }
  return returnValue;
}
