function solution(A) {
    let n = A.length + 1
    let expectedSum = n * (n + 1) / 2
    let sum = A.reduce((a,b) => a+b, 0)
    return expectedSum - sum
}

// XOR Approach
function solution2(A) {
    let n = A.length + 1;
    let xorAll = 0;
    let xorArray = 0;
    
    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xorAll ^= i;
    }
    
    // XOR all elements in the array
    for (let i = 0; i < A.length; i++) {
        xorArray ^= A[i];
    }
    
    // The missing number is the XOR of these two results
    return xorAll ^ xorArray;
}

A = [1, 3, 6, 4, 1, 2]
console.log(solution(A))
console.log(solution2(A))