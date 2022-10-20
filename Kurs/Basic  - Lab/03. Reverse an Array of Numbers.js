function solve(n, input) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(input[i]);
    }
    let out = "";
    for (let u = arr.length - 1; u >= 0; u--) {
        out += `${arr[u]} `;
    }
    console.log(out)
}

solve(3, [10, 20, 30, 40, 50]);