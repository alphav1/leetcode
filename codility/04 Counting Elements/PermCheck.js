function solution(A) {
    let freq = new Set()

    for (let i = 0; i < A.length; i++) {
        if ((A[i] > A.length) || (freq.has(A[i])))  {
            return 0
        }
        freq.add(A[i]);
    }
    return freq.size === A.length ? 1 : 0;
}

function solution2(A) {
    let n = A.length;
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;
    let seen = new Set();
    
    for (let num of A) {
        if (num > n || seen.has(num)) {
            return 0;
        }
        seen.add(num);
        actualSum += num;
    }
    
    return actualSum === expectedSum ? 1 : 0;
}

A = [4, 1, 3, 2]
B = [4, 1, 3]
console.log(solution(A))
console.log(solution(B))

console.log(solution2(A))
console.log(solution2(B))