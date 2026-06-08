let isSecond = false;

function FetchNumber(n1) {
    let box = isSecond ? 'Second' : 'First';
    let x = document.getElementById(box).innerHTML;

    if (x === "0") x = "";

    document.getElementById(box).innerHTML = x + n1;
}

function Operater(op) {
    document.getElementById('Op').innerHTML = op;
    isSecond = true;
}

function Clear() {
    document.getElementById('First').innerHTML = "";
    document.getElementById('Second').innerHTML = "";
    document.getElementById('Op').innerHTML = "";
    document.getElementById('ans').value = "";
    isSecond = false;
}

function Delete() {
    let box = isSecond ? 'Second' : 'First';
    let number = document.getElementById(box).innerHTML;

    if (number.length <= 1) {
        document.getElementById(box).innerHTML = "0";
    } else {
        document.getElementById(box).innerHTML = number.slice(0, -1);
    }
}

function Reset() {
    document.getElementById('ans').value = "";
    document.getElementById('First').innerHTML = "0";
    document.getElementById('Second').innerHTML = "0";
    document.getElementById('Op').innerHTML = "";
    isSecond = false;
}

function Calc() {
    let x = parseFloat(document.getElementById('First').innerHTML);
    let y = parseFloat(document.getElementById('Second').innerHTML);
    let op = document.getElementById('Op').innerHTML;

    let result = 0;

    if (op === '+') result = x + y;
    else if (op === '-') result = x - y;
    else if (op === '×') result = x * y;
    else if (op === '÷') result = (y === 0) ? "Cannot divide by 0" : x / y;
    else if (op === '%') result = (y === 0) ? "Cannot mod by 0" : x % y;

    document.getElementById('ans').value = result;
}