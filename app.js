// the first move always starts with player X
// the app detects a win or tie and displays an appropriate message
// a button resets the game for a new round of gameplay

// separation of concerns:
// user input
// rendering to the screen
// managing app state

let player1Turn = true;
let takeTurn = function(className) {
    let box = document.getElementById(className);

    if (!box.innerHTML) {
        if (player1Turn) {
            box.innerHTML = 'X';
            player1Turn = !player1Turn;
        } else {
            box.innerHTML = 'O';
            player1Turn = !player1Turn;
        }
    }
};

let winner = document.getElementById('winner');
let checkWinner = function() {
    checkFull();

    if (winner.innerHTML.includes('PLAYER WINS')) {
        return;
    }

    if (winner.innerHTML.includes('BOARD IS FULL')) {
        return;
    }

    checkRow1();
    checkRow2();
    checkRow3();

    checkCol1();
    checkCol2();
    checkCol3();

    checkMajorDiag();
    checkMinorDiag();
};

let xCount;
let oCount;

let countScore = function() {
    if (xCount === 3) {
        winner.innerHTML = 'X PLAYER WINS';
    } else if (oCount === 3) {
        winner.innerHTML = 'O PLAYER WINS';
    }
}

// check row-1
let checkRow1 = function() {
    let row1Children = document.getElementById('row-1').children;
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < row1Children.length; i++) {
        if (row1Children[i].innerHTML === 'X') {
            xCount++;
        } else if (row1Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore();
};

// check row-2
let checkRow2 = function() {
    let row2Children = document.getElementById('row-2').children;
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < row2Children.length; i++) {
        if (row2Children[i].innerHTML === 'X') {
            xCount++;
        } else if (row2Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore();
};

// check row-3
let checkRow3 = function() {
    let row3Children = document.getElementById('row-3').children;
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < row3Children.length; i++) {
        if (row3Children[i].innerHTML === 'X') {
            xCount++;
        } else if (row3Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore();
};

// check col-1
let checkCol1 = function() {
    let col1Children = document.getElementsByClassName('col-1');
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < col1Children.length; i++) {
        if (col1Children[i].innerHTML === 'X') {
            xCount++;
        } else if (col1Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore()
};

// check col-2
let checkCol2 = function() {
    let col2Children = document.getElementsByClassName('col-2');
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < col2Children.length; i++) {
        if (col2Children[i].innerHTML === 'X') {
            xCount++;
        } else if (col2Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore()
};

// check col-3
let checkCol3 = function() {
    let col3Children = document.getElementsByClassName('col-3');
    xCount = 0;
    oCount = 0;

    for (let i = 0; i < col3Children.length; i++) {
        if (col3Children[i].innerHTML === 'X') {
            xCount++;
        } else if (col3Children[i].innerHTML === 'O') {
            oCount++;
        }
    }

    countScore();
};

// check major diagonal
let checkMajorDiag = function() {
    xCount = 0;
    oCount = 0;

    if (document.getElementById('one-one').innerHTML === 'X') {
        xCount++;
    }
    if (document.getElementById('two-two').innerHTML === 'X') {
        xCount++;
    }
    if (document.getElementById('three-three').innerHTML === 'X') {
        xCount++;
    }
    
    if (document.getElementById('one-one').innerHTML === 'O') {
        oCount++;
    }
    if (document.getElementById('two-two').innerHTML === 'O') {
        oCount++;
    }
    if (document.getElementById('three-three').innerHTML === 'O') {
        oCount++;
    }

    countScore();
}

// check minor diagonal
let checkMinorDiag = function() {
    xCount = 0;
    oCount = 0;

    if (document.getElementById('one-three').innerHTML === 'X') {
        xCount++;
    }
    if (document.getElementById('two-two').innerHTML === 'X') {
        xCount++;
    }
    if (document.getElementById('three-one').innerHTML === 'X') {
        xCount++;
    }
    
    if (document.getElementById('one-three').innerHTML === 'O') {
        oCount++;
    }
    if (document.getElementById('two-two').innerHTML === 'O') {
        oCount++;
    }
    if (document.getElementById('three-one').innerHTML === 'O') {
        oCount++;
    }

    countScore();
}

let checkFull = function() {
    let full = 0;
    let rows = document.getElementsByTagName('tbody')[0].children;

    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {
            // console.log(rows[i].children[j])
            if (rows[i].children[j].innerHTML) {
                console.log(full)
                full++;
            }
        }
    }

    if (full === 9) {
        document.getElementById('full').innerHTML = 'BOARD IS FULL';
    }
};

// Add a button in index.html and a corresponding event listener inside app.js. When clicked, reset the state of the player (X vs. O) and clear the board. Don't forget to clear the message too.

let reset = function() {
    
}