/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

*/

var mergeTwoLists = function (list1, list2) {
  let arr = [];

  for (let i = 0; i < list1.length; i++) {
    arr.push(list1[i]);
  }

  for (let i = 0; i < list2.length; i++) {
    arr.push(list2[i]);
  }

  return arr.sort();

  //   let listCopy = [...list1, ...list2].sort();
  //   return listCopy;
};

console.log(mergeTwoLists([], []));
