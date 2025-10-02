// https://leetcode.com/problems/compact-object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    function dfs(obj) {
        if (!obj) return false
        if (typeof obj !== 'object') return obj

        if (Array.isArray(obj)) {
            const newArr = []
            for (let i = 0; i < obj.length; i++) {
                const curr = obj[i]
                const subResult = dfs(curr);

                if (subResult) {
                    newArr.push(subResult);;
                }
            }
            return newArr
        } else {
            const newObj = {}
            for (const key in obj) {
                const subResult = dfs(obj[key])
                if (subResult) {
                    newObj[key] = subResult;
                }
            }
            return newObj
        }
    }
    return dfs(obj)
};

obj1 = [null, 0, false, 1]
out1 = [1]
obj2 = {"a": null, "b": [false, 1]}
out2 = {"b": [1]}

test1 = compactObject(obj1)
test2 = compactObject(obj2)
console.log(`TEST 1:  ${JSON.stringify(test1) == JSON.stringify(out1) ? "pass" : "fail"}`)
console.log(`TEST 2:  ${JSON.stringify(test2) == JSON.stringify(out2) ? "pass" : "fail"}`)