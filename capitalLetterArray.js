function capitalFirst(arr) {
  if (arr.length === 1) {
    return arr[0].charAt(0).toUppercase() + arr[0].splice(1).join("");
  }
  return arr[0].charAt(0).toUppercase() + arr[0].splice(1).join("");
}
