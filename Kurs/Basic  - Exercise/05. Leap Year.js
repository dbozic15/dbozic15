function solve(n) {
    if (n % 4 === 0 && n % 100 !== 0) {
        console.log(`yes`);
    } else if (n % 400 === 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
solve(2003)