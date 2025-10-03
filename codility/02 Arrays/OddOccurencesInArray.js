function solution(A) {
    // map, where value is the key, and position is the value
    // in the map there is an element with only one value, that is the element, and return it
    let arr = []
    for (let x of A) {
        if (arr.includes(x)) {
            arr.splice(arr.indexOf(x), 1)
        } else {
            arr.push(x)
        }
    }
    return arr.pop()
}

function solution2(A) {
    var result = 0
    for (let x of A) {
        result = result ^ x
    }
    return result;
}

A = [9, 3, 9, 3, 9, 7, 9]
console.log(solution(A))
console.log(solution2(A))