function solve(input) {
    let neededXp = Number(input.shift());
    let countOfBattle = Number(input.shift());
    let getXp = 0;
    let battleCount = 0;


    for (i = 1; i <= countOfBattle; i++) {
        getXp += Number(input[i - 1]);
        battleCount += 1;

        if (i % 3 === 0) {
            getXp += Number(input[i - 1]) * 0.15;
        }
        if (i % 5 === 0) {
            getXp -= Number(input[i - 1]) * .1;
        }
        if (i % 15 === 0) {
            getXp += Number(input[i - 1]) * 0.05;
        }

        if (getXp > neededXp) {
            break;
        }
    }

    if (getXp > neededXp) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`)
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededXp - getXp).toFixed(2)} more needed.`)
    }

}

solve([500, 5, 50, 100, 200, 100, 20]);