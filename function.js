// Note: Function of the calculator.

let screenDisplay = document.getElementById("display");

let equal = document.getElementById("button-equal");
// let divide = document.getElementById("button-divide");
// let addition = document.getElementById("button-addition");
// let minus = document.getElementById("button-minus");
// let multiply = document.getElementById("button-multiply");

let radical = document.getElementById("button-root");
let clear = document.getElementById("button-clear");
let remove = document.getElementById("button-delete");

/*
let one = document.getElementById("button-one");
let two = document.getElementById("button-two");
let three = document.getElementById("button-three");
let four = document.getElementById("button-four");
let five = document.getElementById("button-five");
let six = document.getElementById("button-six");
let seven = document.getElementById("button-seven");
let eight = document.getElementById("button-eight");
let nine = document.getElementById("button-nine");
let zero = document.getElementById("button-zero");
let point = document.getElementById("button-point");
*/

function clearScreen() {
    screenDisplay.value = "";
}

function errorMessage() {
    if (screenDisplay.value == "NaN" || screenDisplay.value == "undefined") {
        screenDisplay.value = "Error";

        /* 
        clear.disabled = false;
        remove.disabled = true;
        radical.disabled = true;

        seven.disabled = true;
        eight.disabled = true;
        nine.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        zero.disabled = true;
        point.disabled = true;

        divide.disabled = true;
        multiply.disabled = true;
        minus.disabled = true;
        addition.disabled = true;
        equal.disabled = true;
        */ 
    }
}

function showDisplay(input) {
    screenDisplay.value += input;
}

function calculate() {
    screenDisplay.value = eval(screenDisplay.value);
}

function root() {
    screenDisplay.value = Math.sqrt(screenDisplay.value);  
    if (screenDisplay.value == "NaN") {
        screenDisplay.value = "Error";
    }
}

function calculateDelete() {
    screenDisplay.value = screenDisplay.value.slice(0, -1);
}
    
clear.addEventListener("click", clearScreen);

equal.addEventListener("click", calculate);
equal.addEventListener("click", errorMessage);

remove.addEventListener("click", calculateDelete);

radical.addEventListener("click", root);