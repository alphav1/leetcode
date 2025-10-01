// https://leetcode.com/problems/chunk-array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let retArr = []
    for (let i = 0; i < arr.length; i += size) {
        retArr.push(arr.slice(i, i+size))
    }
    return retArr;
};

arr = [1,2,3,4,5];
size = 1;
console.log(chunk(arr, size));

