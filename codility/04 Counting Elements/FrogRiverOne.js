function solution(X, A) {
    let freq = new Set()
    for (let i = 0; i < A.length; i++) {
        if (!freq.has(A[i]) && (A[i] <= X)) {
            freq.add(A[i]);
            if (freq.size === X) {
                return i
            }
        }
    }
    return -1
}

A = [3, 3, 3, 3, 3, 3, 3, 1]
console.log(solution(1, A))