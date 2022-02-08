// Get Elements Here

var alertBtn = document.getElementById("alertBtn");
var clgBtn = document.getElementById("printConsole");
var consoleWarning = document.getElementById("consoleWarning");
var consoleError = document.getElementById("consoleError");
var sumBtn = document.getElementById("sumBtn");
var subBtn = document.getElementById("subBtn");
var mulBtn = document.getElementById("mulBtn");
var divBtn = document.getElementById("divBtn");
var sumAddBtn = document.getElementById("+=Btn");
var subAddBtn = document.getElementById("-+Btn");
var mulAddBtn = document.getElementById("*=Btn");
var divAddBtn = document.getElementById("/=Btn");


// add Event Listeners

alertBtn.addEventListener("click" , btnAlert);
clgBtn.addEventListener('click' , printInConsole);
consoleWarning.addEventListener('click' , consoleWarn);
consoleError.addEventListener('click' , errorConsole);
sumBtn.addEventListener('click' , btnSum);
subBtn.addEventListener('click' , btnSub);
mulBtn.addEventListener('click' , btnMul);
divBtn.addEventListener('click' , btnDiv);
sumAddBtn.addEventListener('click' , btnAddSum);
subAddBtn.addEventListener('click' , btnAddSub);
mulAddBtn.addEventListener('click' , btnAddMul);
divAddBtn.addEventListener('click' , btnAddDiv);


// Event Functions

// Alert button

function btnAlert(){
    alert("This is a simple Alert Message")
}


// Print in console

function printInConsole(){
    let value = prompt("Write Anything Here. I can print it in Console Window. Press f12 to open console window");
    if (value === null) {
        console.log("You can't write any thing in popup... So i can print it in console window.");
    }
    console.log(value);
}

// console Warning

function consoleWarn(){
    let warning = prompt("Write Anything Here. I can print it as a warning in console window. Press f12 to open console window");
    if (warning === null) {
        console.log("You can't write any thing in popup... So i can print it in console window as a Warning.");
    }

    console.warn(warning);
}


// consoleError


function errorConsole(){
    let error = prompt("Write Anything Here. I can print it as a warning in console window. Press f12 to open console window");
    if (error === null) {
        console.log("You can't write any thing in popup... So i can print it in console window as an Error.");
    }

    console.error(error);
}


// SumBtn

function btnSum(){
    var num1 = parseInt(prompt("Enter First Number."));
    var num2 = parseInt(prompt("Enter Second Number."));
    console.log(num1 + num2);
}


// SubBtn


function btnSub(){
    var num1 = parseInt(prompt("Enter First Number."));
    var num2 = parseInt(prompt("Enter Second Number."));
    console.log(num1 - num2);
}


// mulBtn

function btnMul(){
    var num1 = parseInt(prompt("Enter First Number."));
    var num2 = parseInt(prompt("Enter Second Number."));
    console.log(num1 * num2);
}

// divBtn

function btnDiv(){
    var num1 = parseInt(prompt("Enter First Number."));
    var num2 = parseInt(prompt("Enter Second Number."));
    console.log(num1 / num2);
}

// SumBtn

function btnAddSum(){
    var value = 50;
    console.log("Default Value is 50. It can add 2. "  , value += 2);
}


// SubBtn


function btnAddSub(){
    var value = 50;
    console.log("Default Value is 50. It can Subtact 2. "  , value -= 2);
}


// mulBtn

function btnAddMul(){
    var value = 50;
    console.log("Default Value is 50. It can multiply by 2."  , value *= 2);
}

// divBtn

function btnAddDiv(){
    var value = 50;
    console.log("Default Value is 50. It can divided by 2"  , value /= 2);
}
