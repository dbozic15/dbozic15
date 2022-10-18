function solve(word) {
    if (word === word.toUpperCase()) {
        console.log(`upper-case`);
    } else if (word === word.toLowerCase()) {
        console.log(`lower-case`);
    }
}

solve('f')