function solution(N, A) {
    let max = 0;
    let B = new Array(N).fill(0)
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== N+1) {
            B[A[i] - 1] += 1;
            if (B[A[i] - 1] > max) {
                max = B[A[i] - 1]
            }
        } else {
            B = B.map(() => max)
        }
    }
    return B
}

function solution2(N, A) {
    let counters = new Array(N).fill(0);
    let maxCounter = 0;
    let lastMaxCounter = 0;
    
    for (let operation of A) {
        if (operation !== N+1) {
            let index = operation - 1;
            counters[index] = Math.max(counters[index], lastMaxCounter) + 1;
            maxCounter = Math.max(maxCounter, counters[index]);
        } else {
            // Max counter operation (N + 1)
            lastMaxCounter = maxCounter;
        }
    }
    
    // Apply any remaining max counter operations
    for (let i = 0; i < N; i++) {
        counters[i] = Math.max(counters[i], lastMaxCounter);
    }
    
    return counters;
}

let A = [3, 4, 4, 6, 1, 4, 4]
console.log(solution2(5, A))