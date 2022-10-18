function solve(lost, hamletPrice, swordPrice, shieldPrice, armorPrice) {
    let helmentBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lost; i++) {
        // console.log(i);
        if (i % 2 === 0) {
            helmentBroken += 1;
        }
        if (i % 3 === 0) {
            swordBroken += 1;
        }
        if (helmentBroken === 1 && swordBroken === 1) {
            shieldBroken += 1;
        }
        if (shieldBroken <= 1) {
            armorBroken = 0
        }
        else if (shieldBroken % 2 === 0) {
            armorBroken += 1;
        }
    }
    let sum = helmentBroken * hamletPrice + swordBroken * swordPrice + shieldBroken * shieldPrice + armorBroken * armorPrice;
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}

solve(23, 12.50, 21.50, 40, 200);