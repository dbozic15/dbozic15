function solve(product, qty) {
    switch (product) {
        case 'coffee':
            console.log((1.50 * qty).toFixed(2));
            break;
        case 'water':
            console.log((1.00 * qty).toFixed(2));
            break;
        case 'coke':
            console.log((1.40 * qty).toFixed(2));
            break;
        case 'snacks':
            console.log((2.00 * qty).toFixed(2));
            break;
    }
}

solve('water', 5)