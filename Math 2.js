//получаем доступ к спану, в который выводится результат
let spanResult = document.getElementById("resultForcalculatorTwo")
const show = () => {
//забираем значение из инпута 1
    let inputOne = document.getElementById("numberOneForcalculatorTwo");
    let inputOneResult = +inputOne.value;
//забираем значение из инпута 2
    let inputTwo = document.getElementById("numberTwoForcalculatorTwo");
    let inputTwoResult = +inputTwo.value;
// получаем активное значение из селекта
    let choose = document.getElementById("choose");
    let operation = choose.value;
//сами математические операции в зависимости от значения полей селекта
    if (operation === "+")
    {spanResult.innerHTML = (inputOneResult + inputTwoResult).toString() }
    if (operation === "-")
    {spanResult.innerHTML = (inputOneResult - inputTwoResult).toString() }
    if (operation === "*")
    {spanResult.innerHTML = (inputOneResult * inputTwoResult).toString() }
    if (operation === "/")
    {spanResult.innerHTML = (inputOneResult / inputTwoResult).toString() }

}

//вешаем действие на кнопку
let button = document.getElementById("button");
button.addEventListener("click", show )


