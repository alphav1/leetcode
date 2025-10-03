function solution(A) {
    let l = A.length
    let min = Number.POSITIVE_INFINITY
    let left = 0
    let right = 0
    let total = A.reduce((a,b) => a+b)
    for (let i = 0; i < l-1; i++) {
        left += A[i]
        right = total - left
        let d = Math.abs(left - right)
        if (d < min) {
            min = d
        }
    }
    return min
}

let A = [-1, 0, 2]
console.log(solution(A))