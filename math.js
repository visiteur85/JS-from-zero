const sum = (a, b) => {
    return a + b
}
const multiply = (a, b) => {
    return a * b
}
const minus = (a, b) => {
    return a - b
}
const divide = (a, b) => {
    return a / b
}

let resultClc = document.querySelector("#result")

//забираем айди  инпутов
let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");


const arrButtons = document.querySelectorAll(".operation")

let resultOfOperation = (math) => {
    let numberOneValue = +numberOne.value;
    let numberTwoValue = +numberTwo.value;

    if (math === "+") {
        let result = sum(numberOneValue, numberTwoValue);
        resultClc.innerHTML = result
    }
    if (math === "-") {
        let result = minus(numberOneValue, numberTwoValue);
        resultClc.innerHTML = result
    }
    if (math === "*") {
        let result = multiply(numberOneValue, numberTwoValue);
        resultClc.innerHTML = result
    }
    if (math === "/") {
        let result = divide(numberOneValue, numberTwoValue);
        resultClc.innerHTML = result
    }
}

const operation = (event) => {
    let button = event.currentTarget;
    let buttonValue = button.innerText
    resultOfOperation(buttonValue)

}

for (let i = 0; i < arrButtons.length; i++) {
    arrButtons[i].addEventListener("click", operation)
}










