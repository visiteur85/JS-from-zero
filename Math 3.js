let numberButtons = document.querySelectorAll(".number");

for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", numberButtonClickListener);
}
let input = document.getElementById("input");
input.value = 0;


function numberButtonClickListener(e) {
    if (input.value === "0") {
        input.value = null
        input.value = input.value + e.currentTarget.innerHTML
    } else {
        input.value = input.value + e.currentTarget.innerHTML
    }


}





