// https://leetcode.com/problems/group-by

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let arr = this;
    let retMap = {};
    for (let i = 0; i < arr.length; i++) {
        let key = fn(arr[i]);
        if (retMap.hasOwnProperty(key)) {
            retMap[key].push(arr[i]);
        } else {
            retMap[key] = [arr[i]];
        }
    }
    return retMap;
};

array = [
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}

const grouped = array.groupBy(fn);
