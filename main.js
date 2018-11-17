const $field = document.getElementById('field');
const $message = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');

const myArray = [5, 10, 15, 20, 25];

$btn.addEventListener('click', function () {
    const valueFromInput = $field.value;
    updateMyArray(valueFromInput)
})

// 2 ćw
$btn2.addEventListener('click', function () {
    const valueFromInput = $field.value;
    updateMyArray2(valueFromInput)
})

// 3 ćw
$btn3.addEventListener('click', function () {
    const valueFromInput = $field.value;
    updateMyArray3(valueFromInput)
})

// 4 ćw
$btn4.addEventListener('click', function () {
    const valueFromInput = $field.value;
    updateMyArray4(valueFromInput)
})

function updateMyArray(value) {
    value = parseFloat(value)
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1
    }
    myArray.push(value);
    showMessage(value, myArray.length);
    $result.textContent = myArray;
    console.log(myArray);
}

function updateMyArray2(value) {
    value = parseFloat(value)
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1
    }
    myArray.unshift(value);
    index = 0;
    showMessage(value, index);
    $result.textContent = myArray;
    console.log(myArray);
}

function updateMyArray3(value) {
    value = parseFloat(value)
    const $result = document.getElementById('result');
    const $message = document.getElementById('message');

    let valueErase = myArray[myArray.length - 1];

    console.log(valueErase);
    $message.textContent = `odjęto wartość ${valueErase} na pozycji ${myArray.length}`;
    myArray.pop();

    $result.textContent = myArray;
    console.log(myArray);
}


function updateMyArray4(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    // let valueErase = myArray[myArray.length - 1];

    // console.log(valueErase);
    let valueErase = myArray.shift();
    const $message = document.getElementById('message');
    $message.textContent = `odjęto wartość ${valueErase} na pozycji 0`;
    $result.textContent = myArray;
    console.log(myArray);
}

function showMessage(value, index) {
    const $message = document.getElementById('message');
    const text = `dodano wartość ${value} na pozycji ${index}`
    $message.textContent = text;
}
