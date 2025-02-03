// setTimeout(function() {
//     console.log('Hello, world!');
// }, 3000);

// console.log("Start");

// setTimeout(function() {
//     console.log("Delayed log after 2000 milliseconds");
// }, 2000);

// console.log("End");

function delayedFunction() {
    console.log("This won't be executed due to clearTimeout");
}

let timeoutId = setTimeout(delayedFunction, 2000);

// Cancel the setTimeout before it executes
clearTimeout(timeoutId);

console.log("Timeout canceled");

