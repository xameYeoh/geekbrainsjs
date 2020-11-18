let board = document.getElementById('boardInner');
let numContainer = document.getElementById('numberContainer');
let letterContainer = document.getElementById('letterContainer');
let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
let rows = [];

const renderBoard = (useLabels) => {
    if (useLabels) renderLabels();

    for (let i = 0; i < 8; ++i) {
        let row = document.createElement('DIV')
        row.className = 'row'
        row.style.flexDirection = i % 2 === 0 ? '' : 'row-reverse';
        switch (i) {
            case 0:
            case 7: {
                for (let j = 0; j < 8; ++j) {
                    let square = document.createElement('DIV')
                    square.className = 'square'
                    square.style.backgroundColor = j % 2 === 0 ? 'white' : '#A64B00'
                    row.appendChild(square)
                    switch (j) {
                        case 7:
                        case 0: {
                            if (i === 0)
                                square.style.backgroundImage = "url('images/black-rook.png')";
                            else square.style.backgroundImage = "url('images/white-rook.png')";
                            break;
                        }
                        case 1:
                        case 6: {
                            if (i === 0)
                                square.style.backgroundImage = "url('images/black-horse.png')";
                            else square.style.backgroundImage = "url('images/white-horse.png')";
                            break;
                        }


                        case 2:
                        case 5: {
                            if (i === 0)
                                square.style.backgroundImage = "url('images/black-bishop.png')";
                            else square.style.backgroundImage = "url('images/white-bishop.png')";
                            break;
                        }
                        case 3: {
                            if (row.style.flexDirection == 'row-reverse')
                                square.style.backgroundImage = "url('images/white-king.png')"

                            else square.style.backgroundImage = "url('images/black-queen.png')"

                            break;
                        }
                        case 4: {
                            if (row.style.flexDirection == 'row-reverse')
                                square.style.backgroundImage = "url('images/white-queen.png')"

                            else square.style.backgroundImage = "url('images/black-king.png')"

                            break;

                        }

                    }
                }
                break;
            }
            case 1: {
                for (let j = 0; j < 8; ++j) {
                    let square = document.createElement('DIV')
                    square.className = 'square'
                    square.style.backgroundColor = j % 2 === 0 ? 'white' : '#A64B00'
                    row.appendChild(square)
                    square.style.backgroundImage = "url('images/black-pawn.png')";


                }
                break;
            }
            case 6: {
                for (let j = 0; j < 8; ++j) {
                    let square = document.createElement('DIV')
                    square.className = 'square'
                    square.style.backgroundColor = j % 2 === 0 ? 'white' : '#A64B00'
                    row.appendChild(square)
                    square.style.backgroundImage = "url('images/white-pawn.png')";


                }
                break;
            }
            default: {
                for (let j = 0; j < 8; ++j) {
                    let square = document.createElement('DIV')
                    square.className = 'square'
                    square.style.backgroundColor = j % 2 === 0 ? 'white' : '#A64B00'
                    row.appendChild(square)

                }
                break;
            };
        }

        board.appendChild(row)
    }
}

renderLabels = () => {
    letters.forEach((x, i) => {
        let el = document.createElement('DIV')
        let el2 = document.createElement('DIV')
        el.innerText = x
        el.className = 'label'
        el2.innerText = numbers[i]
        el2.className = 'label'
        numContainer.appendChild(el2)
        letterContainer.appendChild(el)
    })
}

renderBoard(true);