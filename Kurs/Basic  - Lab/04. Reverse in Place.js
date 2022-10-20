function solve(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let oldElements = input[i];
        let previousIndex = input.length - 1 - i;
        input[i] = input[previousIndex];
        input[previousIndex] = oldElements;
    }
    console.log(input.join(' '));

}

solve(['a', 'b', 'c', 'd', 'e']);