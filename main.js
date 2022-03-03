// //less01
//
//
// //less06
// // window.alert("Hey");
// // window.alert("Bye");
//
// //les07
//
// // let str1;
// // str1 = "number1";
// // window.alert(str1)
//
// let wordCat;
// wordCat = "cat";
//
// // let translateOfCat = "Кот";
// // window.alert(wordCat);
// // window.alert(translateOfCat)
//
// //les08
// //
// const helloMessElement = document.getElementById("hello-message");
// console.log(helloMessElement.value)
//
// const headerId = document.getElementById("header");
// console.log(headerId.id)
// console.log(headerId.className)
//
// //Homework
//
// const lastname = document.getElementById("lastName");
// console.log(lastname.value);
//
//
//
// const cities = document.getElementById("cities")
// console.log(cities.value)
//
// const hobbies = document.getElementById("hobbies");
// console.log(hobbies.value)
//
// const justDiv = document.getElementById("justDiv");
// console.log(justDiv.innerHTML);
//
// console.log(cities.value);
//
//
//
//
//
// //less 09
// // let inputLes9 = document.getElementById("inputLes9");
// // inputLes9.value = "Inter";
// // inputLes9.className = "inputLes9_green";
// //
// // inputLes9.setAttribute("value", "MU");
// //
// // const ferrari = document.getElementById("ferrari");
// // ferrari.src = "https://ferrari-avilon.ru/images/Monza-SP2_1-osn.jpg"
// // ferrari.title = "My car";
//
// //
// // const divHomework = document.getElementById("divHomework");
// // divHomework.innerHTML = "<ol> <li></li> <li></li> <li></li> <li></li> <li></li></ol>"
//
//
//
// setTimeout(function(){
//
//
//
//     let input2HW2 = document.getElementById("input2HW2");
//     input2HW2.value = "ivanov"
//
//     let input3HW2 = document.getElementById("input3HW2");
//     input3HW2.checked = false
//
//
//
//     let selHW2 = document.getElementById("selHW2");
//     selHW2.value = "kiev";
//
//     let texHW2 = document.getElementById("texHW2");
//     texHW2.value = "i am bad man";
// }, 1000);
//
// let labels = document.getElementsByClassName("some-class-name");
// console.log(labels)
//
// // labels[0].value = "sadfasdfsadf";
//
//
// const changeIMG = () => {
//
//     let imgHW2 = document.getElementById("img1HW2");
//     imgHW2.src = "https://klike.net/uploads/posts/2020-02/1582010541_13.jpg";
//
// };
// let buttonHW2 = document.getElementById("buttonHW2");
// buttonHW2.addEventListener("click", changeIMG);
//
//
// let inputHW2 = document.getElementById("inputHW2");
// inputHW2.value = "Sasha";
// //les11
//
//  const alertMe = () => {
//      console.log(inputHW2.value);
//      console.log(inputHW2.value);
//      debugger
//      console.log(inputHW2.value);
//  }
//
// //12
//
// const lastname = document.getElementById("lastName");
// console.log(lastname.value);
//
// const adress = document.getElementById("adress");
// console.log(adress.value)
//
// const foParametrs = (id) => {
// const differentValue = document.getElementById(id);
//     console.log(differentValue.value)
//
// }
// foParametrs("lastName");
// foParametrs("adress");
//
// //13
//
// const firstNameLog = () => {
// let firstNameId = "FirstName"
// let firstNameEl = document.getElementById(firstNameId)
// console.log(firstNameId.value);}
//
// const lastNameLog = () => {
// let lastNameId = "LastName"
// let firstNameEl = document.getElementById(lastNameId)
// console.log(lastNameId.value);}
//
// let yo = "I am global"
// firstNameLog()
// firstNameLog()
// firstNameLog()
//
// lastNameLog()
// lastNameLog()
// lastNameLog()
//
//
//
// let firstNameId = "FirstName"
// const logValue = (id) => {
//     let el = document.getElementById(id)
//     alert(el.value)
// }
//
// // logValue("input2HW2")
// // // logValue(lastNameId)
// // alert("sadfsadf")
//
// // const logValue = (id) => {
// //     let el = document.getElementById(id)
// //   return el.value
// // }
// //  let foo = logValue("input2HW2")
// // alert(foo)
// //
// const getEl = (id) => {
//     console.log("he")
//     let el = document.getElementById(id)
//     return el;
//
// }
// // let v = getEl("input2HW2").value;
// // alert(v)

// const street = () => {
//     let clock = "Область видимости";
//
//     const bulding = () => {
//
//         const office = () => {
//             alert(clock)
//
//         }
//         office()
//
//     }
//     bulding()
//
// }
// street()()();

// let value = 2;
//
// function show() {
//     console.log("value from show " + value);}
//
// function wrapper() {
//         let value = 3;
//         console.log("value from wrapper" + value);
//         show()
//
//     }
//
//     wrapper()
//
// const f = () => {
//     alert(aa)
//
//     const f2 = () => {
//       const f3 = () => {
//           let aa = "область видимости";
//       }
//       f3()
//     }
//   f2()
// }
//
// f()

// const addErrorClass = (elId) => {
//     let el = document.getElementById(elId);
//     el.className = "error-input"
// }
//
// const addErrorClasstoAll = () => {
//     addErrorClass("firstName");
//     addErrorClass("lasttName");
//     addErrorClass("adresss");
// }
//
// // window.setTimeout(addErrorClasstoAll, 2000)
//
// let buttonn = document.getElementById("send-button")
// buttonn.addEventListener("click", addErrorClasstoAll)

//les 15

let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

let number1 = +input1.value;
let number2 = +input2.value;

const onButtonPlus = () => {

    let sum = number1 + number2;
    alert(sum);

};


const onButtonMinus = () => {

    let minus = number1 - number2;
    alert(minus);
};
const onbuttonMultiply = () => {

    let mult = number1 * number2;
    alert(mult);
};
const onbuttonDevide = () => {

    let dev = number1 / number2;
    alert(dev);
};

buttonPlus.addEventListener("click", onButtonPlus);
buttonMinus.addEventListener("click", onButtonMinus);
buttonMultiply.addEventListener("click", onbuttonMultiply);
buttonDevide.addEventListener("click", onbuttonDevide);
