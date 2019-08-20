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

    const allInputs = document.querySelectorAll('input');
    console.log(allInputs)

    console.log(container)

    container.addEventListener('click', function(e) {
        console.log('container clicked');
        const inner = e.target;
        console.log(inner.nodeName)

        console.log()

        if (inner.nodeName == "INPUT") {
            console.log('You clicked an input!');
            e.target.value = playerTurn;
            e.target.disabled = true
            // console.log('Remove this!')
            // e.target.remove();

            console.log(currentTurn);

            if (currentTurn >= 5) { //Player cannot win before round 5.
                console.log(`check for winner ${playerTurn}`);

                if ((btn1.value == playerTurn) && (btn2.value == playerTurn) && (btn3.value == playerTurn)) { //Horizontal
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn4.value == playerTurn) && (btn5.value == playerTurn) && (btn6.value == playerTurn)) { //Horizontal
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn7.value == playerTurn) && (btn8.value == playerTurn) && (btn9.value == playerTurn)) { //Horizontal
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn1.value == playerTurn) && (btn4.value == playerTurn) && (btn7.value == playerTurn)) { //Vertical
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn2.value == playerTurn) && (btn5.value == playerTurn) && (btn8.value == playerTurn)) { //Vertical
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn3.value == playerTurn) && (btn6.value == playerTurn) && (btn9.value == playerTurn)) { //Vertical
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn1.value == playerTurn) && (btn5.value == playerTurn) && (btn9.value == playerTurn)) { //Diagonal
                    alert('winner!')
                    //Disable all buttons
                } else if ((btn3.value == playerTurn) && (btn5.value == playerTurn) && (btn7.value == playerTurn)) { //Diagonal
                    alert('winner!')
                    //Disable all buttons
                }
            }

            if (playerTurn == 'X') {
                playerTurn = 'O';
            } else if (playerTurn == 'O') {
                playerTurn = 'X';
            }

            currentTurn += 1;
        }
    });
});
