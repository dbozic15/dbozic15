function solve(n) {

    for (let i = 1; i <= n; i++) {
        num = i % 5 === 0;
        if (num === false) {
            num = i % 7 === 0;
            if (num === false) {
                num = i % 11 === 0;
            } else { num }
        } else { num }
        num = i % 7 === 0;
        num = i % 11 === 0;
        console.log(i, num,);

    }

}

solve(15)