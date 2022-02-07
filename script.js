// Get Elements Here

var alertBtn = document.getElementById("alertBtn");
var clgBtn = document.getElementById("printConsole");
var consoleWarning = document.getElementById("consoleWarning");
var consoleError = document.getElementById("consoleError");


// add Event Listeners

alertBtn.addEventListener("click" , btnAlert);
clgBtn.addEventListener('click' , printInConsole);
consoleWarning.addEventListener('click' , consoleWarn);
consoleError.addEventListener('click' , errorConsole);


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