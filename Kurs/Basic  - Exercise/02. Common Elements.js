function solve(input1, input2) {

    for (let i1 = 0; i1 < input1.length; i1++) {
        for (let i2 = 0; i2 < input2.length; i2++) {
            if (input1[i1] === input2[i2]) {
                console.log(input1[i1]);
            }
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])