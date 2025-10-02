function solution(A, K) {
    let l = A.length;
    let B = new Array(l);
    if (A === 0 || K === 0 || (K = K % l) === 0) {
        return A;
    } else {
        for (let i = 0; i < l; i++) {
            B[(i + K) % l] = A[i];
        }
    }
    return B;
}

function solution2(A, K) {
    let l = A.length;
    if (l === 0 || K === 0 || (K = K % l) === 0) {
        return A;
    }
    return A.slice(-K).concat(A.slice(0, -K));
}

function solution3(A, K) {
    K = K % A.length;
    if (K === 0) return A;
    
    return [...A.slice(-K), ...A.slice(0, -K)];
}

let A = [1, 2, 3, 4]
let K = 4
console.log(solution(A, K));