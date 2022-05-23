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

let resultClc =   document.querySelector("#result")

//забираем айди  инпутов
let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");
//забираем значение импутов
let numberOneValue = +numberOne.value;
let numberTwoValue = +numberTwo.value;
//забираем айди кнопок
 let buttonSum = document.querySelector("#sum");
 let buttonMinus = document.querySelector("#minus");
 let buttonMult = document.querySelector("#mult");
 let buttonDev = document.querySelector("#dev");

 const sumHandler = () => {
     let result = sum(numberOneValue, numberTwoValue);
     resultClc.innerHTML = result
 };
 const minusHandler = () => {
     let result = minus(numberOneValue, numberTwoValue);
     resultClc.innerHTML = result
 };
 const mulHandler = () => {
     let result = multiply(numberOneValue, numberTwoValue);
     resultClc.innerHTML = result
 };
 const divideHandler = () => {
     let result = divide(numberOneValue, numberTwoValue);
     resultClc.innerHTML = result
 };




 buttonSum.addEventListener("click", sumHandler );
 buttonMinus.addEventListener("click", minusHandler );
 buttonMult.addEventListener("click", mulHandler );
 buttonDev.addEventListener("click", divideHandler );





