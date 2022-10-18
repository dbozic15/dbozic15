function solve(n) {

    if (n < 2) {
        console.log(`false`)
    } else {

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                console.log(`false`)
                // return false
            } else {
                console.log(`true`)
                // return true
            }
        }
    }



}
// console.log(solve);
solve(8)