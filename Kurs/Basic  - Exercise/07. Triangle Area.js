function solve(a, b, c) {
    let s = (a + b + c) / 2;
    let sum = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(sum);
}

solve(2, 3.5, 4)