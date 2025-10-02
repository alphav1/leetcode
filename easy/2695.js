// https://leetcode.com/problems/array-wrapper

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        return this.nums.reduce((a, b) => a + b, 0);
    }
    toString() {
        return '[' + String(this.nums) + ']';
    }
}



/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
const obj1 = new ArrayWrapper([1,2])
const obj2 = new ArrayWrapper([2,3])
console.log(String(obj1))