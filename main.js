const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');

const myArray = [5,10,15,20,25];

$btn.addEventListener('click', function(){
    const valueFromInput = $field.value;
    updateMyArray(valueFromInput)
})

// 2 ćw
$btn2.addEventListener('click', function(){
    const valueFromInput = $field.value;
    updateMyArray2(valueFromInput)
})

// 3 ćw
$btn3.addEventListener('click', function(){
    const valueFromInput = $field.value;
    updateMyArray3(valueFromInput)
})

function updateMyArray(value){
    value = parseFloat(value)
    const $result = document.getElementById('result');
    if (isNaN(value)){
        value = Math.floor(Math.random()*20)+1
    }
    myArray.push(value);
    showMessage(value,myArray.length);
    $result.textContent=myArray;
    console.log(myArray);
}
function updateMyArray2(value){
    value = parseFloat(value)
    const $result = document.getElementById('result');
    if (isNaN(value)){
        value = Math.floor(Math.random()*20)+1
    }
    myArray.unshift(value);
    showMessage(value,myArray.length);
    $result.textContent=myArray;
    console.log(myArray);
}

function updateMyArray3(value){
    value = parseFloat(value)
    const $result = document.getElementById('result');
    if (isNaN(value)){
        value = Math.floor(Math.random()*20)+1
    }
    let valueErase = myArray[myArray.length]
    console.log(valueErase)
    myArray.pop();
    $field.textContent = valueErase;

    // showMessage(value,myArray.length);
    $result.textContent=myArray;
    console.log(myArray);
}

function showMessage(value, index){
    const $message = document.getElementById('message');
    const text = `dodano wartość ${value} na pozycji ${index}`
    $message.textContent = text;
}

// console.log("działa")
