function solve(input) {
    let days = Number(input[0]);
    let targetPerDay = Number(input[1]);
    let targer = Number(input[2]);
    let sum = 0;

    for (let i = 1; i <= days; i++) {
        sum += targetPerDay;

        if (i % 3 === 0) {
            sum += targetPerDay / 2;
        }
        if (i % 5 === 0) {
            sum = sum * .7;
        }
    }

    if (sum > targer) {
        console.log(`Ahoy! ${sum} plunder gained.`)
    } else {
        console.log(`Collected only ${(sum / targer * 100).toFixed(2)}% of the plunder.`)
    }
}

solve(["10", "20", "380"]);