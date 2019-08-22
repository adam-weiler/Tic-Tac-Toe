document.addEventListener('DOMContentLoaded', function() {
    let playerTurn = 'X';
    let currentTurn = 1;
    const btn1 = document.querySelector('input#btn1');
    const btn2 = document.querySelector('input#btn2');
    const btn3 = document.querySelector('input#btn3');
    const btn4 = document.querySelector('input#btn4');
    const btn5 = document.querySelector('input#btn5');
    const btn6 = document.querySelector('input#btn6');
    const btn7 = document.querySelector('input#btn7');
    const btn8 = document.querySelector('input#btn8');
    const btn9 = document.querySelector('input#btn9');

    const container = document.querySelector('#container');

    // const allInputs = document.querySelectorAll('input');
    // console.log(allInputs)

    // console.log(container)

    container.addEventListener('click', function(e) {
        // console.log('container clicked');
        const boxClicked = e.target;
        // console.log(inner.nodeName)

        console.log()

        function awardWinner(cellA, cellB, cellC) {
            // console.log(cellA, cellB, cellC);
            cellA.classList.add('winner');
            cellB.classList.add('winner');
            cellC.classList.add('winner');

            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
            btn4.disabled = true;
            btn5.disabled = true;
            btn6.disabled = true;
            btn7.disabled = true;
            btn8.disabled = true;
            btn9.disabled = true;

            alert (`${playerTurn} won the game!`);
        }

        if (boxClicked.nodeName == "INPUT") {
            console.log('You clicked an input!');
            boxClicked.value = playerTurn;
            boxClicked.disabled = true
            // console.log('Remove this!')
            // boxClicked.remove();

            console.log(currentTurn);

            if (currentTurn >= 5) { //Player cannot win before round 5.
                console.log(`check for winner ${playerTurn}`);

                if ((btn1.value == playerTurn) && (btn2.value == playerTurn) && (btn3.value == playerTurn)) { //Horizontal
                    awardWinner(btn1, btn2, btn3);
                    //Disable all buttons
                } else if ((btn4.value == playerTurn) && (btn5.value == playerTurn) && (btn6.value == playerTurn)) { //Horizontal
                    awardWinner(btn4, btn5, btn6);
                    //Disable all buttons
                } else if ((btn7.value == playerTurn) && (btn8.value == playerTurn) && (btn9.value == playerTurn)) { //Horizontal
                    awardWinner(btn7, btn8, btn9);
                    //Disable all buttons
                } else if ((btn1.value == playerTurn) && (btn4.value == playerTurn) && (btn7.value == playerTurn)) { //Vertical
                    awardWinner(btn1, btn4, btn7);
                    //Disable all buttons
                } else if ((btn2.value == playerTurn) && (btn5.value == playerTurn) && (btn8.value == playerTurn)) { //Vertical
                    awardWinner(btn2, btn5, btn8);
                    //Disable all buttons
                } else if ((btn3.value == playerTurn) && (btn6.value == playerTurn) && (btn9.value == playerTurn)) { //Vertical
                    awardWinner(btn3, btn6, btn9);
                    //Disable all buttons
                } else if ((btn1.value == playerTurn) && (btn5.value == playerTurn) && (btn9.value == playerTurn)) { //Diagonal
                    awardWinner(btn1, btn5, btn9);
                    //Disable all buttons
                } else if ((btn3.value == playerTurn) && (btn5.value == playerTurn) && (btn7.value == playerTurn)) { //Diagonal
                    awardWinner(btn3, btn5, btn7);
                    //Disable all buttons
                } else if (currentTurn == 9) {
                    alert('It\'s a draw!');
                }
            } 

            if (playerTurn == 'X') {
                playerTurn = 'O';
            } else if (playerTurn == 'O') {
                playerTurn = 'X';
            }

            if (currentTurn < 9) {
                currentTurn += 1;
            } 
        }
    });
});
