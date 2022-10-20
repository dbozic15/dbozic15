function solve(arr1, arr2) {
    let areEqual = true;
    let suma, sumb = 0;
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = Number(arr2[i]);
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }


        if (arr1[i] === arr2[i]) {
            for (num of arr1) {
                suma += num;
            }
            for (num2 of arr2) {
                sumb += num2;
            }
            // suma += Number(arr1[i]);
            // sumb += Number(arr2[i]);
        }
    }
    if (areEqual === true) {
        console.log(`Arrays are identical. Sum: ${sumb / 3}`);
    }
}

solve(['10', '20', '30'], ['10', '10', '30']);