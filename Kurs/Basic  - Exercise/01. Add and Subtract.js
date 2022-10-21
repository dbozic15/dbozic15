function solve(arr) {
    let resultArray = [];
    let sumArr = 0;
    let sumResultArr = 0;
    let arrLength = arr.length

    for (let i = 0; i < arrLength; i++) {

        let currentNum = arr[i];

        let even = (currentNum + i);
        let odd = (currentNum - i);

        if (currentNum % 2 === 0) {
            resultArray.push(even);

        } else {
            resultArray.push(odd);
        }
        sumArr += currentNum;
        sumResultArr += resultArray[i];
    }

    console.log(resultArray);
    console.log(sumArr);
    console.log(sumResultArr);

}

solve([5, 15, 23, 56, 35])