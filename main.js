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


// const newNameValue = "pavel";
// const newLastNameValue = "Krivalcevich";
// const changeValue = (value)=> {
//     firstEl.value = value;
//     secondEl.value = value;
//     thirdEl.value = value;
// }

// changeValue("google")

// firstEl.className = "error";
// secondEl.className = "error";
// thirdEl.className = "error";


// const setError = (id)=> {
//     const el = document.getElementById(id);
//     el.className = "error"
// };
// setError("firstEl")
// setError("secondEl")
// setError("thirdEl")
// setError("asd")
// setError("qwer")

// const getSumm = (a,b) => {
//     return a + b
// }
// console.log(getSumm(34,23));
// console.log(getSumm(3434,12));
// console.log(getSumm(23,23));

// const sayHello = () => {
//     alert('My name')
// };

// const timeoutError = () => {
//     setError("firstEl")
// }
// setTimeout(timeoutError,1000);

// const hideElement = (id) => {
//     let el = document.getElementById(id);
//     el.className = "hidden"
// };
// hideElement("firstEl");

// const showElement = (id) => {
//     let el = document.getElementById(id);
//     el.className = "visible"
// }
// showElement('firstEl')
// let i = 0;
// const seconds = () => {
//     let el = document.getElementById("firstEl")

//     i++;
//     el.value = i;
// }

// setInterval(seconds,1000)


//___________________________homewoerk 10-3____________________________
// const findAndremove = (id) => {
//     let el = document.getElementById(id)
//     if (el !== null) {
//     el.remove()}
// };
// findAndremove("inputID");

// const findTwoParametrs = (id, clas) => {
// let el = document.getElementById(id);
// el.className = clas


// }

// findTwoParametrs("inputID",  "inputclass")
// const decreseEl = (id, clas) => {
//     let el = document.getElementById(id);
// const ss = (clas) => {
//     el.className = clas
// }
// setTimeout(ss, 5000)
//     // el.className = clas
// };

// decreseEl("divdiv", "divdivone")

// let first = document.getElementById("1");
// let second = document.getElementById("2");
// let third = document.getElementById("3");

// const arr = [first, second, third  ];
// const delEl = (valueForDelete) => {
// arr.map(m=> m.value == valueForDelete ? m.className = "divdiv" : m)
// }

// delEl(2);
// delEl(3)

// let first = document.getElementById("1");
// let second = document.getElementById("2");
// let third = document.getElementById("3");
// const arr = [first, second, third  ];


// // const delClass = (num) => {

// //     num.map(m=> m.className === "hey" ? m.remove() : m) 
// // };
// // delClass(arr);

// const hasClassHey = (el) => {
//     if (el.className === "hey") 
//     {return true;}
//     else {return false};
// }

// removeElementIfConditionsTrue = (elements, predicate ) => {
//     elements.map(m=> predicate(m) ? m.remove() : m )
// }

// removeElementIfConditionsTrue(arr, hasClassHey )


// const h2 = () => {
//     let el = document.getElementById("h2");
//     el.remove()
// }

// let button = document.getElementById("del");
// button.addEventListener("click", h2)
//-------------------------------------------------------
//Homework 14
// const task1 = () => {
// let el = document.getElementById("task14-1");
// el.type = "text"
// }
// const task2 = () => {
//     let el = document.getElementById("task14-1");
//     el.type = "password"
//     }


// let el = document.getElementById("task14-11");
// el.addEventListener("mousedown", task1);

// el.addEventListener("mouseup", task2);

// let elSpan = document.getElementById("span2");
// let elInput = document.getElementById("task14-1");
// let elButton = document.getElementById("button");


// const tuchSpan = ()=> {
//      elSpan.className = "inVisible14";
//      elInput.className = "visible14";
//      elButton.className = "visible14";

// };
// elSpan.addEventListener("click", tuchSpan);


// const saveMe = () => {
//     let inputValue = elInput.value;
//     elSpan.innerHTML = inputValue;
//     elSpan.className = "visible14";
//     elInput.className = "inVisible14";
//      elButton.className = "inVisible14";

// }
// elButton.addEventListener("click", saveMe )

// const elButton = document.getElementById("button14");
// const elinput1 = document.getElementById("input141");
// const elinput2 = document.getElementById("input142");


// const changeMe = () => {
// const valueOfInputOne = elinput1.value;
// const valueOfInputTwo = elinput2.value;
// elinput1.value = valueOfInputTwo;
// elinput2.value = valueOfInputOne


// }

// elButton.addEventListener("click", changeMe)

// let buttonPlus = document.getElementById("buttonPlus");
// let buttonMinus = document.getElementById("buttonMinus");
// let buttonMultiply = document.getElementById("buttonMultiply");
// let buttonDevide = document.getElementById("buttonDevide");

// const operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide];

//
// const firstEl = document.getElementById("firstEl");
// const secondEl = document.getElementById("secondEl");
// const thirdEl = document.getElementById("thirdEl");



// ---------------------------------------------------slider_______________________________________
// const imagesUrls = [];

// const showPrevBtn = document.getElementById("showPrev");
// const showNextBtn = document.getElementById("showNext");
// const sliderImage = document.getElementById("sliderImage")




// imagesUrls.push("https://htstatic.imgsmail.ru/pic_image/45ad9a435cc6bf88035d161dcc7f5679/840/473/1670326/");
// imagesUrls.push("https://news.liga.net/images/general/2021/11/17/thumbnail-tw-20211117200528-6313.jpg?v=1637174346");
// imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwjYA7SCo-huKmFUfqQ7qn_pZaVLXTlk5TJKGtqSKk-Zg7qv3lQjLpQzfguat1zlXpMY&usqp=CAU");
// imagesUrls.push("https://rossaprimavera.ru/static/files/6f9705ebd098.jpg");


// let currentImage = 0;

// sliderImage.src = imagesUrls[currentImage];
// showPrevBtn.disabled = true


// const onShowPrevClick = (event) => {

//     currentImage--
//     sliderImage.src = imagesUrls[currentImage];
//     if (currentImage === 0) {
//         showPrevBtn.disabled = true
//     }
//     showNextBtn.disabled = false
// };

// const onNextPrevClick = (event) => {
//     currentImage++;
//     sliderImage.src = imagesUrls[currentImage];
//     showPrevBtn.disabled = false
//     if (currentImage === (imagesUrls.length-1))
//     {showNextBtn.disabled = true}

// };
// showPrevBtn.addEventListener("click", onShowPrevClick);
// showNextBtn.addEventListener("click", onNextPrevClick);
// // ---------------------------------------------------objects_______________________________________

// var car1 = {
//     name: "Reno Stepway",
//     isTurnOn: false,
//     speed: 0,
//     engine: {
//         v: 1.6,
//         horses: 120,
//     },
//     start:function(){
//          this.isTurnOn = true;
//         this.speed = 10
//     }
// };
// car1.start()
// ----------------------------------------------------calculator_______________________________________
const operationButtons = document.getElementsByClassName("operation-button");


let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");


const makeOperation = (operationCode) => {
    let number1 = +input1.value;
    let number2 = +input2.value;

    if (operationCode === "+") {
        let result = number1 + number2;
        alert(result)
    } else if (operationCode === "-") {
        let result = number1 - number2;
        alert(result)
    } else if (operationCode === "*") {
        let result = number1 * number2;
        alert(result);
    } else if (operationCode === "/") {
        let result = number1 / number2;
        alert(result);
    }
}

const onOperationButtonClock = (e) => {
    let click = e.currentTarget;
    let operation = click.innerHTML;
    makeOperation(operation)
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", onOperationButtonClock)
}
//============================================slider=====================================================


let slider1 = sliderFactory.createNewSlider();
let slider2 = sliderFactory.createNewSlider()

slider1.start("itk-slider1");
slider2.start("itk-slider2");

//_____________________________the end Slider_____________________________________________________________

//====================================Constructor=========================================================

class Team {
    constructor(nameOfTeam) {

        this.teamName = nameOfTeam;
        this.action = function () {
            alert(`${this.teamName} champion`);
        };

    }
}

let newTeam = new Team("MU");
newTeam.action()