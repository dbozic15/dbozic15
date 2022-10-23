function solve(input) {
    let index = input.shift().split('>>');
    let taxTotal = 0;
    let taxCar = 0;
    let taxDuty = 0;
    let taxSport = 0;

    for (let i = 0; i < index.length; i++) {
        let index2 = index[i].split(' ');
        if (index2[0] === 'family') {
            // i += 1;
            taxCar = 50 - Number(index2[1]) * 5;
            // i += 1;
            let countKm = Math.floor(index2[2] / 3000);
            taxCar = taxCar + countKm * 12;
            taxTotal += taxCar;
            console.log(`A family car will pay ${taxCar.toFixed(2)} euros in taxes.`)
        } else if (index2[0] === 'heavyDuty') {
            // i += 1;
            taxDuty = 80 - Number(index2[1]) * 8;
            // i += 1;
            let countKm = Math.floor(index2[2] / 9000);
            taxDuty = taxDuty + countKm * 14;
            taxTotal += taxDuty;
            console.log(`A heavyDuty car will pay ${taxDuty.toFixed(2)} euros in taxes.`)
        } else if (index2[0] === 'sports') {
            // i += 1;
            taxSport = 100 - Number(index2[1]) * 9;
            // i += 1;
            let countKm = Math.floor(index2[2] / 2000);
            taxSport = taxSport + countKm * 18;
            taxTotal += taxSport;
            console.log(`A sports car will pay ${taxSport.toFixed(2)} euros in taxes.`)
        } else {
            console.log(`Invalid car type.`)
        }
    }
    console.log(`The National Revenue Agency will collect ${taxTotal.toFixed(2)} euros in taxes.`)
}

solve(['family 5 3210>>pickUp 1 2345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012']);