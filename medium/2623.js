// https://leetcode.com/problems/memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // here establish a map for storing inputs
    const cache = new Map();
    // take into account the input with json stringify

    return function(...args) {
        const key = JSON.stringify(args);
        // check if the input params are already in the map
        if (cache.has(key)) {
            return cache.get(key); // if yes, check the map for cached answer
        }
        // if no pass the function on the params
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */