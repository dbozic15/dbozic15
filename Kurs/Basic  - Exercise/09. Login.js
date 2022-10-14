function solve(user, try1, try2, try3, try4) {
    let password = user.split('').reverse().join('')
    // console.log(password);

    if (password === try1) {
        console.log(`User ${user} logged in.`);
    } else {
        console.log(`Incorrect password. Try again`);
        if (password === try2) {
            console.log(`User ${user} logged in.`);
        } else {
            console.log(`Incorrect password. Try again`);
            if (password === try3) {
                console.log(`User ${user} logged in.`);
            } else {
                console.log(`Incorrect password. Try again`);
                if (password === password4) {
                    console.log(`User ${user} logged in.`);
                } else {
                    console.log(`User ${user} blocke!`);
                }
            }
        }
    }
}

solve('momo', 'omom')