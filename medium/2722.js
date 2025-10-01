// https://leetcode.com/problems/join-two-arrays-by-id

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let joinedArray = [];
    let map = new Map();
    for (let obj of arr1) {
        map.set(obj.id, { ...obj })
    }

    for (let obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, { ...map.get(obj.id), ...obj})
        } else {
            map.set(obj.id, { ...obj });
        }
    }
    joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);
    console.log('Result:', JSON.stringify(joinedArray, null, 2));
    return joinedArray;
};


arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
arr2 = [
    {"id": 3, "x": 5}
];

join(arr1, arr2);