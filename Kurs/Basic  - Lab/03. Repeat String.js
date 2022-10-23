function solve(str, rep) {
    let result = '';
    for (let i = 0; i < rep; i++) {
        result += str;
    }
    console.log(result);
}

solve('abc', 3);