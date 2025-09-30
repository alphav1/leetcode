// https://leetcode.com/problems/allow-one-function-call/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = 0;
    return function(...args){
      calls++;
      if (calls > 1) return undefined
      else return fn(...args);
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // returns undefined without calling fn

