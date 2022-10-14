function solve(p, t, d) {
    let sum = 0
    switch (d) {
        case 'Friday':
            switch (t) {
                case 'Students':
                    sum = p * 8.45;
                    if (p >= 30) {
                        console.log(`Total price: ${(sum - (sum * .15)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;
                case 'Business':
                    if (p >= 100) {
                        p = p - 10;
                    }
                    sum = p * 10.90;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case 'Regular':
                    sum = p * 15;
                    if (p >= 10 && p <= 20) {
                        console.log(`Total price: ${(sum - (sum * .05)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;

            }
            break;
        case 'Saturday':
            switch (t) {
                case 'Students':
                    sum = p * 9.80;
                    if (p >= 30) {
                        console.log(`Total price: ${(sum - (sum * .15)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;
                case 'Business':
                    if (p >= 100) {
                        p = p - 10;
                    }
                    sum = p * 15.60;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case 'Regular':
                    sum = p * 20;
                    if (p >= 10 && p <= 20) {
                        console.log(`Total price: ${(sum - (sum * .05)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;

            }
            break;
        case 'Sunday':
            switch (t) {
                case 'Students':
                    sum = p * 10.46;
                    if (p >= 30) {
                        console.log(`Total price: ${(sum - (sum * .15)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;
                case 'Business':
                    if (p >= 100) {
                        p = p - 10;
                    }
                    sum = p * 16;
                    console.log(`Total price: ${sum.toFixed(2)}`);
                    break;
                case 'Regular':
                    sum = p * 22.50;
                    if (p >= 10 && p <= 20) {
                        console.log(`Total price: ${(sum - (sum * .05)).toFixed(2)}`);
                    } else {
                        console.log(`Total price: ${sum.toFixed(2)}`);
                    }
                    break;

            }
            break;
    }
}

solve(100, 'Business', 'Friday');