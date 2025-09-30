// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var retArr = [];
    for (let i = 0; i < arr.length; i++) {
        retArr.push(fn(arr[i], i));
    }
    return retArr;
};

arr = [1,2,3];
fn = function plusI(n, i) { return n + i; }
const newArray = map(arr, fn); // [2,3,4]
console.log(newArray);