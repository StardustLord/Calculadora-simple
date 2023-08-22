let total = 0;
let buffer = "0";
let signoAnt;

const pantalla = document.querySelector('.pantalla');

function btnClick(value) {
    if (isNaN(value)) {
        usarSigno(value);

    } else {
        usarNum(value);

    }
    pantalla.innerText = buffer;

}

function usarSigno(signo) {
    switch (signo) {
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            if (signoAnt === null) {
                return
            }
            limpiarOperacion(parseInt(buffer));
            signoAnt = null;
            buffer = total;
            total = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';

            } else {
                buffer = buffer.substring(0, buffer.length - 1);

            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            usarMath(signo);
            break;
    }

}

function usarMath(signo) {
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    if (total === 0) {
        total = intBuffer;

    } else {
        limpiarOperacion(intBuffer);

    }
    signoAnt = signo;
    buffer = '0';
}

function limpiarOperacion(intBuffer) {
    if (signoAnt === '+') {
        total += intBuffer;
    } else if (signoAnt === '−') {
        total -= intBuffer;
    } else if (signoAnt === '×') {
        total *= intBuffer;
    } if (signoAnt === '÷') {
        total /= intBuffer;
    }
}

function usarNum(numString) {
    if (buffer === "0") {
        buffer = numString;

    } else {
        buffer += numString;
    }
}

function init() {

    const breakdownButton = document.querySelectorAll('.calcBtn');
    breakdownButton.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            btnClick(event.target.innerText);
        });
    });

}

init();