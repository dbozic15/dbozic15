function solve(arr) {
    let newArr = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        // console.log(arr);

        if (arr[i] % 2 === 0) {
            arr.push(arr[i] + i);
            console.log(arr)
        } else {
            arr.push(arr[i] - i)
        }
        console.log(arr)

    }

}

solve([5, 15, 23, 56, 35])