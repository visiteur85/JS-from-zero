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

let numberOne = document.querySelector("#numberOne");
let numberTwo = document.querySelector("#numberTwo");

let numberOneValue = +numberOne.value;
let numberTwoValue = +numberTwo.value;


 console.log(sum(numberOneValue, numberTwoValue ))