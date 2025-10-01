/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = (arr, fn) => arr.sort((a,b) => fn(a) - fn(b));

arr = [5, 4, 1, 2, 3];
fn = (x) => x;
sortBy(arr, fn);
console.log(arr);