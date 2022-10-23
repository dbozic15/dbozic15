function solve(arr1, arr2) {
    let sumEven = 0;
    let sumOdd = 0;
    let resultArray = [];
    for (let i1 = 0; i1 < arr1.length; i1++) {
        for (let i2 = 0; i2 < arr2.length; i2++) {
            if (i1 % 2 === 0) {
                sumEven = Number(arr1[i1]) + Number(arr2[i2]);
                resultArray.push(sumEven);
                i1++
            } else {
                sumOdd = String(arr1[i1]) + String(arr2[i2]);
                resultArray.push(sumOdd);
                i1++
            }
        }
        break;

        // console.log()
    }
    console.log(resultArray.join(' - '));

}

solve(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])