function solution(A) {
    let n = A.length;
    for (let i = 0; i < n; i++) {
        if (A[i] <= 0 || A[i] > n) {
            A[i] = n + 1;
        }
    }
    for (let i = 0; i < n; i++) {
        let num = Math.abs(A[i]);
        if (num <= n) {
            A[num - 1] = -Math.abs(A[num - 1]);
        }
    }
    for (let i = 0; i < n; i++) {
        if (A[i] > 0) {
            return i + 1;
        }
    }
    return n + 1;
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // Expected: 5
console.log(solution([1, 2, 3]));           // Expected: 4
console.log(solution([-1, -3]));            // Expected: 1
console.log(solution([7, 8, 9, 11, 12]));   // Expected: 1
console.log(solution([0, 0, 0, 1]));        // Expected: 2, but let's see what we get