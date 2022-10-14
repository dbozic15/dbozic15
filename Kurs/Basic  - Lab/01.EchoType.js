function solve(input) {
    var input = input;
    let type = typeof input;
    // console.log(type)
    if (type === 'string' || type === 'number') {
        console.log(type);
        console.log(input);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }
}

solve(null)