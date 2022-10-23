function solve(n1, n2, n3) {
    let result = n1 * n2 * n3;
    if (result > 0) {
        console.log(`Positive`);
    } else {
        console.log(`Negative`);
    }
}

solve(-6, -12, 14);