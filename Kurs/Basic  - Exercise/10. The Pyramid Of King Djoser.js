function solve(base, increment) {
    let block = 1
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let materials = 0;
    let sum = 0;
    for (let h = base; h >= 1; h) {

        stone = (h - 2) * (h - 2)
        marble = h * h - stone

        console.log(stone, marble);

        h = h - 2


        if (h > 0) {
            block += 1;
            // console.log(h);
        }
    }


    // console.log(materials)
    // console.log(block)

    // Stone required: 165 
    // Marble required: 112 
    // Lapis Lazuli required: 8 
    // Gold required: 1 
    // Final pyramid height: 6
}

solve(11, 1)