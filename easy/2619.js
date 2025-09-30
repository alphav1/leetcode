// https://leetcode.com/problems/array-prototype-last/

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;

};

const arr = [1, 2, 3];
console.log(arr.last()); // Should output: 3

const emptyArr = [];
console.log(emptyArr.last()); // Should output: -1