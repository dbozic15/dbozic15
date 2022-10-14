function solve(n1, n2) {
    let sum = 0
    let out = ''
    for (let i = n1; i <= n2; i++) {
        // console.log(i);
        sum += i
        out += `${i} `
    }
    console.log(out)
    console.log(`Sum: ${sum}`)
}

solve(5, 10)