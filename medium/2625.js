// 

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    var newarr = []
    if (n <= 0) {
        return arr;
    } else {
        for (x of arr) {
            if (typeof x == "number") {
                newarr.push(x)
            } else {
                newarr.push(...flat(x, n - 1));
            }
        }
    }
    return newarr
};

let arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let res1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

let att1 = flat(arr1, 0);
console.log(`[TEST 1] ${JSON.stringify(att1) == JSON.stringify(res1) ? "PASS" : "FAIL"}`)

let att2 = flat(arr1, 1);

console.log(att2);