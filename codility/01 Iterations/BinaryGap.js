function solution(n) {
    let binaryString = n.toString(2)
    let max = 0
    let counting = false
    let count = 0
    for (let char of binaryString) {
        // check if num is 1, and if counting
        if (char === '1') {
            if (counting) {
                counting = false
                if (count > max) {
                    max = count;
                }
                count = 0
            } else {
                counting = true
            }
        } else {
           if (counting) {
            count++
           }
        }
    }
    return max
}

function solution2(n) {
    let binary = n.toString(2);
    let gaps = binary.match(/(?<=1)0+(?=1)/g);
    return gaps ? Math.max(...gaps.map(gap => gap.length)) : 0;
}

console.log(solution(1041))

