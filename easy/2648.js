// https://leetcode.com/problems/generate-fibonacci-sequence/

/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;
    while(true) {
        yield a;
        [a, b] = [b, b + a];
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3