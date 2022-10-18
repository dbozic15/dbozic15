function solve(r, h) {
    let v = (1 / 3) * Math.PI * r ** 2 * h
    let a = (Math.PI * r * Math.sqrt(r ** 2 + h ** 2)) + (Math.PI * r ** 2);
    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${a.toFixed(4)}`);
}
solve(3.3, 7.8)