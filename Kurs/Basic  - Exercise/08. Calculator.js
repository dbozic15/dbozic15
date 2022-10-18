function solve(n1, symbol, n2) {
    let sum = 0;
    if (symbol === '+') {
        sum = n1 + n2;
        console.log(sum.toFixed(2));
    } else if (symbol === '-') {
        sum = n1 - n2;
        console.log(sum.toFixed(2));
    } else if (symbol === '*') {
        sum = n1 * n2;
        console.log(sum.toFixed(2));
    } else if (symbol === '/') {
        sum = n1 / n2;
        console.log(sum.toFixed(2));
    }
}

solve(5, '/', 10)