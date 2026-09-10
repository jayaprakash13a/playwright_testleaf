// Task 1: Function Declaration
function userProfile(name) {
    console.log(`Hello, ${name}!`);
}

userProfile("John");

// Task 2: Arrow Function
const double = (num) => num * 2;

console.log(double(5)); // 10

// Task 3: Anonymous Function with setTimeout
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

// Task 4: Callback Function
function getUserData(callback) {
    setTimeout(function () {
        callback("Call Back Function");
    }, 3000);
}

// Calling getUserData with a callback
getUserData(function (message) {
    console.log(message);
});