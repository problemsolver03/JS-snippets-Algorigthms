/* Anagaram 
   Is a string when rearranged forms a word,phrase or a sentence.
   example : (race , care) 
*/
// define anagaram function
// accepts to arguemts of strings
// check if the string length is the same.
// return false if not same
// define two objects to store str charcaters as keys and update their occurance by n times based on the times they are found
// compare the two object to match keys and values
// return false if not same
// return true if objects are same

const anagaram = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false;
    }

    const createStrObj = (string) => {

        let strObj = {};
        for (let val of string) {
            if (strObj[val] === undefined) {
                strObj[val] = 1;
            }
            else {
                strObj[val] = strObj[val] + 1
            }
        }
        return strObj
    }

    let str1Obj = createStrObj(str1);
    let str2Obj = createStrObj(str2);

    for (const character in str1Obj) {
        if (str2Obj[character] === undefined) {
            return false;
        }
        else if (str1Obj[character] !== str2Obj[character]) {
            return false;
        }
    }
    return true;
}

console.log(anagaram('rrr', 'rra'));