function solve(n, r) {
    if (r >= 15) {
        console.log(parseFloat(n.toFixed(15)))
    } else {
        console.log(parseFloat(n.toFixed(r)))
    }
}
solve(10.5, 3)