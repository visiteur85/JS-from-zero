//less01


//less06
// window.alert("Hey");
// window.alert("Bye");

//les07

// let str1;
// str1 = "number1";
// window.alert(str1)

let wordCat;
wordCat = "cat";

// let translateOfCat = "Кот";
// window.alert(wordCat);
// window.alert(translateOfCat)

//les08
//
const helloMessElement = document.getElementById("hello-message");
console.log(helloMessElement.value)

const headerId = document.getElementById("header");
console.log(headerId.id)
console.log(headerId.className)

//Homework

const lastname = document.getElementById("lastName");
console.log(lastname.value);

const adress = document.getElementById("adress");
console.log(adress.value)

const cities = document.getElementById("cities")
console.log(cities.value)

const hobbies = document.getElementById("hobbies");
console.log(hobbies.value)

const justDiv = document.getElementById("justDiv");
console.log(justDiv.innerHTML);

console.log(cities.value);





//less 09
// let inputLes9 = document.getElementById("inputLes9");
// inputLes9.value = "Inter";
// inputLes9.className = "inputLes9_green";
//
// inputLes9.setAttribute("value", "MU");
//
// const ferrari = document.getElementById("ferrari");
// ferrari.src = "https://ferrari-avilon.ru/images/Monza-SP2_1-osn.jpg"
// ferrari.title = "My car";

//
// const divHomework = document.getElementById("divHomework");
// divHomework.innerHTML = "<ol> <li></li> <li></li> <li></li> <li></li> <li></li></ol>"



setTimeout(function(){



    let input2HW2 = document.getElementById("input2HW2");
    input2HW2.value = "ivanov"

    let input3HW2 = document.getElementById("input3HW2");
    input3HW2.checked = false



    let selHW2 = document.getElementById("selHW2");
    selHW2.value = "kiev";

    let texHW2 = document.getElementById("texHW2");
    texHW2.value = "i am bad man";
}, 1000);

let labels = document.getElementsByClassName("some-class-name");
console.log(labels)

// labels[0].value = "sadfasdfsadf";


const changeIMG = () => {
  
    let imgHW2 = document.getElementById("img1HW2");
    imgHW2.src = "https://klike.net/uploads/posts/2020-02/1582010541_13.jpg";

};
let buttonHW2 = document.getElementById("buttonHW2");
buttonHW2.addEventListener("click", changeIMG);


let inputHW2 = document.getElementById("inputHW2");
inputHW2.value = "Sasha";
//les11

 const alertMe = () => {
     console.log(inputHW2.value);
     console.log(inputHW2.value);
     debugger
     console.log(inputHW2.value);
 }

 alertMe()


