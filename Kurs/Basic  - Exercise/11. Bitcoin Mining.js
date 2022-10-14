function solve(d1, d2, d3) {
    let days = 1;
    let sum = 0;
    let bitcoin = 11949.16;
    let countb = 0;
    let bought = 0;
    let leftMoney = 0;
    if (d1 > 0) {
        sum = d1 * 67.51
        if (sum > bitcoin) {
            countb++
            bought = (sum / bitcoin)
        } else {
            days++;
        }
    }
    if (d2 > 0) {
        sum = sum + (d2 * 67.51)
        if (sum > bitcoin) {
            countb++
            // bought++
            bought = (sum / bitcoin)

        } else {
            days++;
        }

    }
    if (d3 > 0) {
        sum = sum + (d3 * .7 * 67.51)
        if (sum > bitcoin) {
            countb++
            // bought++
            bought = (sum / bitcoin)
            sum

        } else {
            days++;
        }

    }
    leftMoney = sum - (bitcoin * Math.floor(bought));

    console.log(`Bought bitcoins: ${Math.floor(bought)}`)
    if (bought > 0) {
        console.log(`Day of the first purchased bitcoin: ${days}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);

}

solve(100, 200, 300)