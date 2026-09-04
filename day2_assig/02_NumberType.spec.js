// Function to determine whether a number is positive, negative, or zero
function checkNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Neutral";
    }
}

let num = -4;

console.log(checkNumberType(num));