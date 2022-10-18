function solve(n1, n2, n3) {

    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else if (n3 > n2 && n3 > n1) {
        console.log(n3);
    } else {
        console.log(n1)
    }
}

solve(2,

    2,

    2)