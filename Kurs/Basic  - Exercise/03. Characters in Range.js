function solve(char1, char2) {
    let first = char1.codePointAt(0);
    let second = char2.codePointAt(0);
    let result = 0;
    let str = ''

    if (first < second) {
        for (let i = first; i < second; i++) {
            console.log(i);

            str += String(i);
            result += str.charCodeAt(0) + ' ';
            str = 0;

        }
        console.log(result);
    }
    console.log(first.charCodeAt(0), second.charCodeAt(0))
}

solve('#', ':');