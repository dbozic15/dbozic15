function solve(input) {
    let list = input.shift();
    let book = input.slice();
    let inBookList = list.split('&');
    let currentBook = book.shift();

    while (currentBook != 'Done') {
        let current = currentBook.split(' | ');
        let comand = current[0];
        let comandBook = current[1];

        switch (comand) {
            case 'Add Book':
                if (!inBookList.includes(comandBook)) {
                    inBookList.unshift(comandBook);
                }
                break;
            case 'Take Book':
                let index = inBookList.indexOf(comandBook)

                if (index > -1) {
                    inBookList.splice(index, 1);
                }
                break;
            case 'Swap Book':
                if (inBookList.includes(comandBook)) {
                    let updateIndex = inBookList.indexOf(comandBook);
                    if (updateIndex > -1) {
                        let element = inBookList[updateIndex];
                        inBookList[element] = current[2];

                    }
                    // inBookList.indexOf(comandBook) = current[2];
                }


                break;
            case 'Insert Book':
                if (!inBookList.includes(comandBook)) {
                    inBookList.push(comandBook);
                }
                break;
            case 'Check Book':
                console.log(inBookList[comandBook]);
                break;
        }
        currentBook = book.shift();

    }
    console.log(inBookList.join(', '));


}
solve(['Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
    'Add Book | Catch-22'
    , 'Swap Book | Anna Karenina | Catch-22',
    'Take Book | David Copperfieald'
    , 'Done'])