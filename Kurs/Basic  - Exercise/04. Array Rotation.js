function solve(input, skip) {

    for (let i = 0; i < skip; i++) {
        let numberToMove = input.shift();
        input.push(numberToMove)
    }

    console.log(input.join(' '))
}


solve([51, 47, 32, 61, 21], 2);