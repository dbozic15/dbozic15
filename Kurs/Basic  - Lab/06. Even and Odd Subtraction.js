function solve(input) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < input.length; i++) {
        input[i] = Number(input[i]);
    }
    for (let num of input) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}

solve([2, 4, 6, 8, 10])