function solve(number) {

    let numberAsString = number.toString();
    let sumOfDigits = 0;
    let numberOfDigits = numberAsString.length;

    for (let index = 0; index < numberOfDigits; index++) {
        // console.log(numberAsString[index]);
        sumOfDigits += Number(numberAsString[index])
        // console.log(sumOfDigits)
    }
    console.log(sumOfDigits)
}
solve(97561)