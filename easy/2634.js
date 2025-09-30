// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var uarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            uarr.push(arr[i]);
        }
    }
    return uarr;
};

arr = [0,10,20,30];
fn = function greaterThan10(n) { return n > 10; };
const newArray = filter(arr, fn); // [20, 30]