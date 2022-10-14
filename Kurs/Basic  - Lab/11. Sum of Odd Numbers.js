function solve(n) {
    let oddNumber = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        console.log(oddNumber);
        sum += oddNumber;
        oddNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}
solve(5)