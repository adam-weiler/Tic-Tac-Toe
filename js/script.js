document.addEventListener('DOMContentLoaded', function() {
    // const btn1 = document.querySelector('button.btn1');
    // const btn2 = document.querySelector('button.btn2');
    // const btn3 = document.querySelector('button.btn3');
    // const btn4 = document.querySelector('button.btn4');
    // const btn5 = document.querySelector('button.btn5');
    // const btn6 = document.querySelector('button.btn6');
    // const btn7 = document.querySelector('button.btn7');
    // const btn8 = document.querySelector('button.btn8');
    // const btn9 = document.querySelector('button.btn9');

    const container = document.querySelector('#container');


    const allButtons = document.querySelectorAll('button');
    console.log(allButtons)

    console.log(container)

    container.addEventListener('click', function(e) {
        console.log('container clicked');
        const inner = e.target;
        console.log(inner.nodeName)

        console.log()

        if (inner.nodeName == "BUTTON") {
            console.log('You clicked a button!');
            e.target.disabled = true
            // console.log('Remove this!')
            // e.target.remove();
        }
    })

})